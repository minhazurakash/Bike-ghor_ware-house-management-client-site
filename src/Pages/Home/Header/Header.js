import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
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
      className={
        location.pathname === "/" ? "d-none " : "py-3 navbar-dark bg-dark "
      }
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
            <Link to="/Blog" className="text-white nav-link">
              Blog
            </Link>
            {user ? (
              <>
                <Link to="/manage" className="text-white nav-link">
                  Manage-Inventory
                </Link>
                <Link to="/addproduct" className="text-white nav-link">
                  Add-Item
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

export default Header;
