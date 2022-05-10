import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      className="py-4 navbar-dark fs-5 position-sticky"
      bg="none"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
