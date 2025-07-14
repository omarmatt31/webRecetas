import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";

const Administrador = () => {
    return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-6 colorTitulos">Recetas disponibles</h2>
        <div>
          <Button className="btn btn-warning text-light" >
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <Button className="btn btn-danger ms-2 text-light">
            <i class="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center ">
            <th className="text-secondary">Cod</th>
            <th className="text-secondary">Receta</th>
            <th className="text-secondary">Tiempo de Preparado</th>
            <th className="text-secondary">URL de Imagen</th>
          </tr>
        </thead>
        <tbody>
            <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;