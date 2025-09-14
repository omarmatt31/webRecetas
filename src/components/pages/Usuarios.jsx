import { Button, Table } from "react-bootstrap";
import { recetasData } from "../../data/recetasPrueba"
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { leerRecetas, leerUsuarios } from "../../helpers/queries";
import ItemUsuario from "./usuarios/ItemUsuario";

const Usuarios = ({setRecetas, recetas, borrarReceta}) => {

    const [listaUsuarios, setListaUsuarios]= useState([]);

    useEffect(()=>{
      obtenerUsuarios();
    }, [])

    const obtenerUsuarios = async ()=>{
      const respuesta = await leerUsuarios()
      if(respuesta.status === 200){
        const datos = await respuesta.json()
        setListaUsuarios(datos)
      }else{
        console.info('Ocurrio un error al buscar un producto')
      }
    }

    return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-6 colorTitulos">Administrador de Usuarios</h2>
        <div>
          <Link className="btn btn-warning" to={'/usuarios/crear'} >
            <i class="bi bi-person-add fs-3"></i>
          </Link>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center ">
            <th className="text-secondary">#</th>
            <th className="text-secondary">Nombre Usuario</th>
            <th className="text-secondary">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            listaUsuarios.map((usuario, indice)=> <ItemUsuario key={usuario._id} usuario={usuario} fila={indice+1} setListaUsuarios={setListaUsuarios}></ItemUsuario>)
          }
        </tbody>
      </Table>
    </section>
    );
};

export default Usuarios;