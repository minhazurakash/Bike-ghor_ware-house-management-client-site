import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "./Login.module.css";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="l-side w-75 border p-4 rounded">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="login-header text-primary mb-4">Log in</h2>
            <h5 className="mb-3">Login to stay connected.</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="outline-primary" type="submit" className=" mb-4">
                Login
              </Button>
            </Form>
            <Link className="" to="/reset">
              Forgot your password?
            </Link>
            <span className="d-block mt-2">
              New user?{" "}
              <Link className="" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
          <div className="r-side col-lg-6 d-flex justify-content-center">
            <img
              className={`${login.loginImg} w-75`}
              src="https://i.ibb.co/qWncyyv/login.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
