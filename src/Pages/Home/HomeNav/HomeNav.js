import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const HomeNav = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    toast.success("Logout Successfull", {
      position: "top-center",
      autoClose: 1000,
    });
  };
  return (
    <Navbar
      // className="position-sticky"
      className="py-4 navbar-dark bg-none fs-5"
      bg="none"
      expand="lg"
    >
      <Container>
        <Link to="/" className="text-white navbar-brand">
          Bike Ghor
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
            {user ? (
              <>
                <Link to="/manage" className="text-white nav-link">
                  Manage-Inventory
                </Link>
                <Link to="/myitem" className="text-white nav-link">
                  My-Item
                </Link>
                <span
                  onClick={handleLogOut}
                  className="text-warning nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </span>
              </>
            ) : (
              <Link to="/login" className="text-white nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
