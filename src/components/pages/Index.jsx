import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";

const Index = () => {
    return (
        <section>
        <img
            className="banner"
            src="https://images.pexels.com/photos/833109/pexels-photo-833109.jpeg"
            alt="fondo cocinando"
        />
        <div  className="titulos py-2">
                <h2 className="text-light text-center">Recetas</h2>
        </div>
        <Container className="mt-5">
            <Row>
                <CardReceta></CardReceta>
            </Row>
        </Container>
        </section>
    );
};

export default Index;