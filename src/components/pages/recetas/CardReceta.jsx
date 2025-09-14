import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const CardReceta = ({receta}) => {
    return (
    <Col md={4} lg={3} className="mb-3 contenedorImagen ">
      <Card className="h-100 ">
        <div className="" >
          <img
            src={receta.imagen}
            alt="costilla de cerdo"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="text-secondary">{receta.nombreReceta}</Card.Title>
          <Card.Text className="text-end">
            <span className="text-secondary fw-bold"><i className="bi bi-stopwatch me-2"></i>{receta.duracion}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center fondoCard">
          <Link variant="warning" className="me-2 text-secondary btn btn-warning" to={'/detalle/'+receta._id}>
            Ver más!
          </Link>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default CardReceta;