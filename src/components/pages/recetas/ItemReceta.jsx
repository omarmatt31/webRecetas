import { Button } from "react-bootstrap";

const ItemReceta = ({receta, fila}) => {
    return (
   <tr>
      <td className="text-center align-middle">{fila}</td>
      <td className="align-middle">{receta.nombreReceta}</td>
      <td className="text-center align-middle">{receta.duracion}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt={receta.nombreReceta}
        ></img>
      </td>
      <td className="text-center align-middle">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemReceta;