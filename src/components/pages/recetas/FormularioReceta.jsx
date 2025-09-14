import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm} from "react-hook-form";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router";
import { crearReceta, editarReceta, obtenerRecetasPorId } from "../../../helpers/queries";

const FormularioReceta = ({titulo, buscarReceta}) => {
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
      obtenerReceta();
    },[])

    const obtenerReceta = async()=>{
        if(titulo === 'Modificar Receta'){
          const respuesta = await obtenerRecetasPorId(id)
          if(respuesta.status === 200){
            const recetaBuscada = await respuesta.json()
            if(recetaBuscada === undefined){
              navegacion('/administrador')
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "La receta es inexistente",
                  });
            }else{
              setValue('nombreReceta', recetaBuscada.nombreReceta)
              setValue('duracion', recetaBuscada.duracion)
              setValue('imagen', recetaBuscada.imagen)
              setValue('descripcion', recetaBuscada.descripcion)
              setValue('porciones', recetaBuscada.porciones)
              setValue('ingredientes', recetaBuscada.ingredientes)
              setValue('preparacion', recetaBuscada.preparacion)
            }
          }
          const recetaBuscada =  buscarReceta(id)
          console.log(recetaBuscada)

        }
    }

    const onSubmit = async (receta) =>{
        if(titulo === 'Receta Nueva'){
          const respuesta = await crearReceta(receta)
            if(respuesta.status === 201){
              Swal.fire({
              title: "Receta creada",
              text: `La receta ${receta.nombreReceta} fue creada correctamente`,
              icon: "success"
              });
            reset()
            }else{
              Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No pudo crearse la receta",
            });
            }
        }else{
          const respuesta = await editarReceta(receta, id)
            if(respuesta.status === 200){
                Swal.fire({
                title: "Receta editada",
                text: `La receta ${receta.nombreReceta} fue editada correctamente`,
                icon: "success"
            });
            }
        }
        navegacion('/administrador')
    }

    return (
        <section className="container mainSection">
      <h1 className="display-5 mt-5 colorTitulos">{titulo}</h1>
      <hr />
     <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pollo con Papas"
            {...register("nombreReceta", {
              required: "El nombre de la receta es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta debe tener almenos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre de la receta debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDuracion">
          <Form.Label>Duracion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 1h 30min"
            {...register("duracion", {
              required: "La duración es un valor obligatorio",
              minLength: {
                value: 2,
                message:
                  "La duración de la receta debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "La duración de la receta debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.duracion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Delicioso pollo en una salsa cremosa de curry..."
            {...register("descripcion", {
              required: "La descripcion del plato es obligatorio",
              minLength: {
                value: 2,
                message:
                  "La descripción del plato debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 300,
                message:
                  "La descripción del plato debe tener como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPorciones">
          <Form.Label>Porciones</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 4 Porciones"
            {...register("porciones", {
              required: "La cantidad de porciones es obligatorio",
              minLength: {
                value: 2,
                message:
                  "La cantidad de porciones de la receta debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "La cantidad de porciones de la receta debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.porciones?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 2 kg de alitas de pollo"
            as="textarea"
            {...register("ingredientes", {
              required: "Los ingredientes son obligatorio",
              minLength: {
                value: 2,
                message:
                  "Los ingredientes de la receta debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 400,
                message:
                  "Los ingredientes de la receta debe tener como maximo 400 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPreparacion">
          <Form.Label>Preparacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Salpimentar el pollo..."
            as="textarea"
            {...register("preparacion", {
              required: "La preparación es un dato obligatorio",
              minLength: {
                value: 5,
                message: "La preparación debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 1000,
                message:
                  "La preparación debe tener como máximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.preparación?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="warning">
          Guardar
        </Button>
      </Form>
    </section>
    );
};

export default FormularioReceta;