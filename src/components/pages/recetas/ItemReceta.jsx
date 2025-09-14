import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { borrarRecetaPorId, leerRecetas } from "../../../helpers/queries";

const ItemReceta = ({receta, fila, setListaRecetas}) => {

    const eliminarReceta=()=>{
    Swal.fire({
      title: "Eliminar Receta",
      text: "No puedes revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#024959",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaPorId(receta._id)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${receta.nombreReceta} fue eliminada correctamente`,
            icon: "success",
          });
          const respuestaRecetas = await leerRecetas();
          const recetasActualizadas = await respuestaRecetas.json()
          setListaRecetas(recetasActualizadas)
        }else{
            Swal.fire({
            title: "Ocurrio un error",
            text: `La receta ${receta.nombreReceta} no pudo ser eliminada.`,
            icon: "error",
          });
        }
      }
    });
    }
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
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+receta.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemReceta;