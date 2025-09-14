import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../assets/logoReceta.png"
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({usuarioAdmin, setUsuarioAdmin}) => {
    const navegacion = useNavigate()
    const logout = ()=>{
      setUsuarioAdmin(false)
      sessionStorage.removeItem('userKey')
      navegacion('/')
    }
    return (
    <Navbar expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>          
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={70}
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={'nav-link'} to={'/'}>Inicio</NavLink>
            {usuarioAdmin ? (
              <>
              <NavDropdown title="Administrador" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/administrador'}>Recetas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/usuarios'}>Usuarios</NavDropdown.Item>
              </NavDropdown>
                <Button className="nav-link text-start" onClick={logout}>Logout</Button>
              </> 
              ):(
                <NavLink className={'nav-link'} to={'/login'}>Login</NavLink>
              )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;