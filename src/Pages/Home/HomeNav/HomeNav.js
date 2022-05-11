import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <Navbar
      // className="position-sticky"
      className="py-4 navbar-dark bg-none fs-5"
      bg="none"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">Bike Ghor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
            <Link to="/login" className="text-white nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
