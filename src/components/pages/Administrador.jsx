import {Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { recetasData } from "../../data/recetasPrueba"
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries";
import Spinner from 'react-bootstrap/Spinner';

const Administrador = ({setRecetas}) => {
    const [mostrarSpinner, setMostrarSpinner] = useState(true)
    const [listaRecetas, setListaRecetas]= useState([]);

    useEffect(()=>{
      obtenerRecetas();
    }, [])

    const obtenerRecetas = async ()=>{
      const respuesta = await leerRecetas()
      if(respuesta.status === 200){
        const datos = await respuesta.json()
        setListaRecetas(datos)
      }else{
        console.info('Ocurrio un error al buscar un producto')
      }
      setMostrarSpinner(false)
    }

    const cargarRecetasPrueba = () =>{
      setRecetas(recetasData)
    }

    return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-6 colorTitulos">Recetas disponibles</h2>
        <div>
          <Link className="btn btn-warning" to={'/administrador/crear'} >
            <i className="bi bi-file-earmark-plus fs-3"></i>
          </Link>
        </div>
      </div>
      <hr />
      {
            mostrarSpinner ?                     
              <div className="text-center mt-5">
                <Spinner animation="border" variant="warning" role="status" ></Spinner>
              </div> 
              :
              <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center ">
            <th className="text-secondary">#</th>
            <th className="text-secondary">Receta</th>
            <th className="text-secondary">Tiempo de Preparado</th>
            <th className="text-secondary">URL de Imagen</th>
          </tr>
        </thead>
        <tbody>
          {
              listaRecetas.map((receta, indice)=> <ItemReceta key={receta._id} receta={receta} fila={indice+1} setListaRecetas={setListaRecetas}></ItemReceta>)
          }
        </tbody>
      </Table>
      }
      
    </section>
    );
};

export default Administrador;