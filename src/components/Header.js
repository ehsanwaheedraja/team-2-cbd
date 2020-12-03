import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import axios from "axios";
// import logoLg from "../images/logo_190x104.jpg";
// import logoSm from "../images/logo_120x67.jpg";

const Header = () => {
  return (
   <Container className="Navbar">
  <Navbar bg="warning" variant="dark">
    <Navbar.Brand href="#Logo">Cultivando Bienestar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#CBD">El CBD</Nav.Link>
      <Nav.Link href="#Proyecto">Proyecto Social</Nav.Link>
      <Nav.Link href="#Productos">Productos</Nav.Link>
    </Nav>
    
  </Navbar>
  

</Container>
  );
};

export default Header;