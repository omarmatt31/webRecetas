import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";

const DetalleReceta = () => {
    return (
    <Container className="my-3 mainSection">
        <Row>
          <Col md={6} className="px-0">
          <div className="d-flex flex-column justify-content-center align-items-center text-light titulos w-100 h-100 px-4">
              <h2>Costillas de cerdo a la barbacoa</h2>
              <p className="mb-4">Las costillas de cerdo son un corte muy popular, para asar o para hacer al 
                horno. Son tiernas, sabrosas y se pueden preparar con diferentes salsas: en esta receta, se cocinan con la clásica salsa barbacoa y una mezcla de condimentos y especias.</p>
              <div className="d-flex justify-content-between w-100 mt-4">
                <span className="text-light fw-bold"><i class="bi bi-people me-2"></i>2 Porciones</span>
                <span className="text-light fw-bold"><i class="bi bi-stopwatch me-2"></i>1hr 15 min</span>
              </div>
          </div>
          </Col>
          <Col md={6} className="px-0">
            <img
              variant="top"
              src="https://images.pexels.com/photos/27953851/pexels-photo-27953851.jpeg"
              className="card-img-top-nueva mx-0"
            />
          </Col>
        </Row>
        <Row className="my-4">
            <Col>
                <h3 className="colorTitulos"><i class="bi bi-basket2 me-2"></i>Ingredientes:</h3>
                    <ListGroup as="ol" className="w-75">
                        <ListGroup.Item as="li" className="text-secondary">1,40 kg Costillas de cerdo</ListGroup.Item>
                        <ListGroup.Item as="li" className="text-secondary">80 gramos Salsa barbacoa</ListGroup.Item>
                        <ListGroup.Item as="li" className="text-secondary">½ cucharadita Ají triturado</ListGroup.Item>
                        <ListGroup.Item as="li" className="text-secondary">¼ cucharadita Pimienta negra en grano</ListGroup.Item>
                        <ListGroup.Item as="li" className="text-secondary">¼ cucharadita Especias surtidas molidas</ListGroup.Item>
                    </ListGroup>
            </Col>
            <Col>
               <h3 className="colorTitulos">Paso a Paso</h3>
               <p className="fw-light">Preparar la salsa mezclando barbacoa, Ají triturado, Especias Surtidas molidas y Pimienta Negra molida.
                Limpiar el pechito de cerdo intentando sacarle la mayor cantidad de grasa posible y pintarlo con la salsa previamente hecha.
                En la parrilla del horno o en una placa para horno cocinar la carne durante 45 minutos a fuego mínimo evitando así que se queme la salsa.
                Pasados los 45 minutos de cocción pintarlos nuevamente con la salsa y cocinarlos sólo por 3 minutos más.</p>
            </Col>
        </Row>
    </Container>
    );
};

export default DetalleReceta;