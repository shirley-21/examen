import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">Realidad Aumentada</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#carousel">Inicio</Nav.Link>
        <Nav.Link href="#info">Información</Nav.Link>
        <Nav.Link href="#register">Registro</Nav.Link>
        <Nav.Link href="#crud">CRUD</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
