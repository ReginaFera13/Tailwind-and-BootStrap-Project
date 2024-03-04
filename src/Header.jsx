import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css'

function Header() {

    return (
      <>
        <Navbar expand="lg" className="bg-danger sticky-top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src/assets/pokeball.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top circle"
            />{' '}
            Pokemon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Bug</NavDropdown.Item>
                    <NavDropdown.Item href="#">Dark</NavDropdown.Item>
                    <NavDropdown.Item href="#">Dragon</NavDropdown.Item>
                    <NavDropdown.Item href="#">Electric</NavDropdown.Item>
                    <NavDropdown.Item href="#">Fairy</NavDropdown.Item>
                    <NavDropdown.Item href="#">Fighting</NavDropdown.Item>
                    <NavDropdown.Item href="#">Fire</NavDropdown.Item>
                    <NavDropdown.Item href="#">Flying</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ghost</NavDropdown.Item>
                    <NavDropdown.Item href="#">Grass</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ground</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ice</NavDropdown.Item>
                    <NavDropdown.Item href="#">Normal</NavDropdown.Item>
                    <NavDropdown.Item href="#">Poison</NavDropdown.Item>
                    <NavDropdown.Item href="#">Psychic</NavDropdown.Item>
                    <NavDropdown.Item href="#">Rock</NavDropdown.Item>
                    <NavDropdown.Item href="#">Steel</NavDropdown.Item>
                    <NavDropdown.Item href="#">Water</NavDropdown.Item>
                    <NavDropdown.Item href="#">Ghost</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
  }
  
  export default Header
  