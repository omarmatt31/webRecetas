import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm} from "react-hook-form";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router";
import { crearReceta, crearUsuario, editarReceta, editarUsuario, obtenerUsuarioPorId } from "../../../helpers/queries";

const FormularioUsuario = ({titulo}) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue
    } = useForm();
    const navegacion = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
      obtenerUsuario();
    },[])

    const obtenerUsuario = async()=>{
        if(titulo === 'Modificar Usuario'){
          const respuesta = await obtenerUsuarioPorId(id)
          console.log(respuesta)
          if(respuesta.status === 200){
            const usuarioBuscado = await respuesta.json()
            if(usuarioBuscado === undefined){
              navegacion('/usuarios')
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "El usuario es inexistente",
                  });
            }else{
              setValue('nombreUsuario', usuarioBuscado.nombreUsuario)
              setValue('email', usuarioBuscado.email)
            }
          }
        }
    }

    const onSubmit = async (usuario) =>{
        if(titulo === 'Usuario Nuevo'){
          const respuesta = await crearUsuario(usuario)
            if(respuesta.status === 201){
              Swal.fire({
              title: "Usuario creado",
              text: `El usuario ${usuario.nombreUsuario} fue creado correctamente`,
              icon: "success"
              });
            reset()
            }else{
              Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No pudo crearse el usuario",
            });
            }
        }else{
          const respuesta = await editarUsuario(usuario, id)
            if(respuesta.status === 200){
                Swal.fire({
                title: "Usuario editado",
                text: `El usuario ${usuario.nombreUsuario} fue editado correctamente`,
                icon: "success"
            });
            }
        }
        navegacion('/usuarios')
    }

    return (
    <section className="container mainSection w-50">
      <h1 className="display-5 mt-5 colorTitulos">{titulo}</h1>
      <hr />
     <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: admin"
            {...register("nombreUsuario", {
              required: "El nombre del usuario es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del usuario debe tener almenos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del usuario debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: admin@admin.com"
            {...register("email", {
              required: "El Email es un valor obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor ingresa un email válido"
                }
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: "La contraseña es un dato obligatorio",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message:
                  "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-center">
            <Button type="submit" variant="warning">
            Guardar
            </Button>
        </div>

      </Form>
    </section>
    );
};

export default FormularioUsuario;