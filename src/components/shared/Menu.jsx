import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../assets/logoReceta.png"
import { NavLink, Link } from "react-router";

const Menu = () => {
    return (
    <Navbar expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home">          
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={70}
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;