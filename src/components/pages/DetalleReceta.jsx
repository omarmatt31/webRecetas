import { useEffect, useState } from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";

const DetalleReceta = ({buscarReceta}) => {
  const {id} = useParams()

  const [receta, setReceta] = useState({})

  useEffect(()=>{
    const recetaBuscada = buscarReceta(id)
    setReceta(recetaBuscada)
  }, [])
    return (
    <Container className="my-3 mainSection">
        <Row>
          <Col md={6} className="px-0">
          <div className="d-flex flex-column justify-content-center align-items-center text-light titulos w-100 h-100 px-4">
              <h2>{receta.nombreReceta}</h2>
              <p className="mb-4">{receta.descripcion}</p>
              <div className="d-flex justify-content-between w-100 mt-4">
                <span className="text-light fw-bold"><i className="bi bi-people me-2"></i>{receta.porciones}</span>
                <span className="text-light fw-bold"><i className="bi bi-stopwatch me-2"></i>Tiempo: {receta.duracion}</span>
              </div>
          </div>
          </Col>
          <Col md={6} className="px-0">
            <Card.Img
              variant="top"
              src={receta.imagen}
              alt={receta.nombreReceta}
              className="card-img-top-nueva"
            />
          </Col>
        </Row>
        <Row className="my-4">
            <Col md={4} className="mt-3">
                <h3 className="colorTitulos"><i class="bi bi-basket2 me-2"></i>Ingredientes:</h3>
                    <ListGroup as="ol" className="w-75">
                        <ListGroup.Item as="li" className="text-secondary">{receta.ingredientes}</ListGroup.Item>
                    </ListGroup>
            </Col>
            <Col className="border-start mt-3">
               <h3 className="colorTitulos">Paso a Paso</h3>
               <p className="fw-light">{receta.preparacion}</p>
            </Col>
        </Row>
    </Container>
    );
};

export default DetalleReceta;