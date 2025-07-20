import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { recetasData } from "../../data/recetasPrueba"
import { Link } from "react-router";

const Administrador = ({setRecetas, recetas}) => {

    const cargarRecetasPrueba = () =>{
      setRecetas(recetasData)
    }
    return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-6 colorTitulos">Recetas disponibles</h2>
        <div>
          <Link className="btn btn-warning text-light" to={'/administrador/crear'} >
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button className="btn btn-danger ms-2 text-light" onClick={cargarRecetasPrueba}>
            <i className="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
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
            recetas.map((receta, indice)=> <ItemReceta key={receta.id} receta={receta} fila={indice+1}></ItemReceta>)
          }
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;