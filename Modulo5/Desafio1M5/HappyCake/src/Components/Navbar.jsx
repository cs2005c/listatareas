import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Front from "../Components/Front";

const Barra = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <h3>Bienvenidos</h3>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Página Principal
            </Nav.Link>
            <Nav.Link as={Link} to="/Contacto">
              Contáctanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
