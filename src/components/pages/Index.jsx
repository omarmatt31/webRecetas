import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries";
import Spinner from 'react-bootstrap/Spinner';

const Index = () => {
    const [recetas, setRecetas] = useState([]);
    const [mostrarSpinner, setMostrarSpinner] = useState(true)

    useEffect(()=>{
        obtenerRecetas();
    },[])

    const obtenerRecetas = async ()=>{
        const respuesta = await leerRecetas()
        if(respuesta.status === 200){
            const datos = await respuesta.json()
            setRecetas(datos)
        }else{
            console.info('Ocurrio un error al buscar un producto')
        }
        setMostrarSpinner(false)
    }
    return (
        <section>
        <img
            className="banner"
            src="https://images.pexels.com/photos/833109/pexels-photo-833109.jpeg"
            alt="fondo cocinando"
        />
        <div  className="titulos py-2">
                <h2 className="text-light text-center">Recetas</h2>
        </div>
        <Container className="mt-5">
            <Row>
                {
                    mostrarSpinner ? 
                    <div className="text-center mt-5" >
                        <Spinner animation="border" variant="warning" role="status" ></Spinner>
                    </div>
                    :
                    recetas.map((receta)=> <CardReceta key={receta._id} receta={receta}></CardReceta>)
                }
            </Row>
        </Container>
        </section>
    );
};

export default Index;