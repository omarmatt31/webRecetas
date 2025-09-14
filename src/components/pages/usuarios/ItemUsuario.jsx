import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { borrarUsuarioPorId, leerUsuarios } from "../../../helpers/queries";

const ItemUsuario = ({usuario, fila, setListaUsuarios}) => {

    const eliminarUsuario=()=>{
    Swal.fire({
      title: "Eliminar Usuario",
      text: "No puedes revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#024959",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuarioPorId(usuario._id)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Usuario eliminado",
            text: `El usuario ${usuario.nombreUsuario} fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaUsuarios = await leerUsuarios();
          const usuariosActualizados = await respuestaUsuarios.json()
          setListaUsuarios(usuariosActualizados)
        }else{
            Swal.fire({
            title: "Ocurrio un error",
            text: `El usuario ${usuario.nombreUsuario} no pudo ser eliminado.`,
            icon: "error",
          });
        }
      }
    });
    }
    return (
   <tr>
      <td className="text-center align-middle">{fila}</td>
      <td className="align-middle">{usuario.nombreUsuario}</td>
      <td className="text-center align-middle">{usuario.email}</td>
      <td className="text-center align-middle">
        <Link className="me-lg-2 btn btn-warning" to={'/usuarios/editar/'+usuario._id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemUsuario;