import { Col, Card, Button } from "react-bootstrap";

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
          <Button variant="warning" className="me-2 text-secondary">
            Ver más!
          </Button>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default CardReceta;