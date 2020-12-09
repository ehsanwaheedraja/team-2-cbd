import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/Bienestar.png"

const Header = () => {
  return (
   


  <Navbar className="Navbar" bg="primary" expand="lg" variant="light" fixed="top">
    <Container >
  <Navbar.Brand href="#Logo">
  <img
          src={logo} width="180px" height="37.78px" className="logoImg"
          alt="Logo"
        /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
  <Container className="navButtons" >
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
     
      <Nav.Link href="#CBD">El CBD</Nav.Link>
      <Nav.Link href="#PROYECTO">Proyecto Social</Nav.Link>
      <Nav.Link href="#PRODUCTOS">Productos</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default Header;