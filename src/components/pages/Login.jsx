import { Row, Col, Form, Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";

const Login = ({setUsuarioAdmin}) => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm()
    const navegacion = useNavigate()

    const iniciarSesion = async (usuario)=>{
        const respuesta = await login(usuario)
        if(respuesta.status === 200){
           const datosUsuario = await respuesta.json
           setUsuarioAdmin({nombreUsuario: datosUsuario.nombreUsuario, token: datosUsuario.token})
           Swal.fire({
                title: "Incio de sesión correcto",
                text: `Bienvenido ${datosUsuario.nombreUsuario}`,
                icon: "success"
            });
            navegacion('/administrador')
        }else{
            Swal.fire({
                title: "Error al iniciar sesion",
                text: `Credenciales incorrectas` ,
                icon: "error",
            });
        }
    }

    return (
        <>
        <h2 className="text-center titulos text-light py-2 mb-4">Login</h2>
        <section  className='container my-3'>
            
            <Row xs={1} md={2}>
                <Col>
                   <Form onSubmit={handleSubmit(iniciarSesion)}>
                        <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-secondary  fw-light">Email</Form.Label>
                        <Form.Control type="email" placeholder="Ej: juanperez@mail.com" {...register('email',{
                            required: 'El email es un dato obligatorio',
                            pattern:{
                            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message: 'El email debe tener un formato valido, por ej: juanperez@mail.com'
                            }
                        })} />
                        <Form.Text className="text-danger">
                        {errors.email?.message}
                        </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="text-secondary fw-light">Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" {...register('password', {
                            required: 'La contraseña es un dato ogligatorio',
                            pattern:{
                            value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                            message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
                            }
                        })}/>
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                        </Form.Group>
                        <div className="w-100 text-center">
                            <Button variant="warning" type="submit" className="text-light w-25">
                                Enviar
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                <img src="https://images.pexels.com/photos/6546019/pexels-photo-6546019.jpeg" alt="cocinando" className="w-100"/>
                </Col>
            </Row>
        </section>
        </>
    );
};

export default Login;