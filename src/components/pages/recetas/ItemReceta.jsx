import { Button } from "react-bootstrap";

const ItemReceta = () => {
    return (
   <tr>
      <td className="text-center align-middle">1</td>
      <td className="align-middle">Costilla de Cerdo a la Barbacoa</td>
      <td className="text-center align-middle">1hr 15 min</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/27953851/pexels-photo-27953851.jpeg"
          className="img-thumbnail"
          alt="costilla de cerdo"
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