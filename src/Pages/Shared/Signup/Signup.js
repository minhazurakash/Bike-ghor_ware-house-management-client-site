import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import signup from "./Signup.module.css";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="l-side w-75 border p-4 rounded">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="signup-header text-primary mb-4">Sign up</h2>
            <h5 className="mb-3">Signup to stay connected.</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="accept our terms and condition"
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                type="submit"
                className=" mb-4"
                disabled={true}
              >
                Signup
              </Button>
            </Form>
            <span className="d-block mt-2">
              Already have an accaount?{" "}
              <Link className="" to="/login">
                Login
              </Link>
            </span>
          </div>
          <div className="r-side col-lg-6 d-flex justify-content-center">
            <img
              className={`${signup.signupImg} w-75`}
              src="https://i.ibb.co/qWncyyv/login.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
