import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
    return (
    <Col md={4} lg={3} className="mb-3 contenedorImagen ">
      <Card className="h-100 ">
        <div className="" >
          <img
            src="https://images.pexels.com/photos/27953851/pexels-photo-27953851.jpeg"
            alt="costilla de cerdo"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="text-secondary">Costillas de cerdo a la barbacoa</Card.Title>
          <Card.Text className="text-end">
            <span className="text-secondary fw-bold"><i class="bi bi-stopwatch me-2"></i>1hr 15 min</span>
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