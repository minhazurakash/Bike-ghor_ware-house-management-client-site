import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row  w-100">
        <div className="col-lg-6 col-md-10 border p-4 rounded mx-auto">
          <div>
            <div className="d-flex justify-content-around">
              <Link
                className="mt-1 animate__animated animate__fadeIn animate__infinite	infinite animate__slower"
                to="/login"
              >
                <i class="fa-solid fa-arrow-left fs-2"></i>
              </Link>
              <h2 className="text-primary mb-4">Reset Password</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Button variant="outline-primary" type="submit" className=" mb-4">
                Send verification email
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
