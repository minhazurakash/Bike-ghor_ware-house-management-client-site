import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import login from "./Login.module.css";
const axios = require("axios").default;

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const location = useLocation();
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (error) {
      const err = error.code.split("/")[1];
      toast.warning(err, { position: "top-center", autoClose: 2000 });
    }
    if (user) {
      localStorage.setItem("key", token);
      navigate(from, { replace: true });
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }, [error, user]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    fetch("https://stark-brushlands-59441.herokuapp.com/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  };
  return (
    <div className="container my-5">
      <div className=" d-flex justify-content-center py-4">
        <div className=" w-75 border p-4 rounded">
          <div className="row">
            <div className=" col-md-12 col-lg-6">
              <h2 className="login-header text-primary mb-4">Log in</h2>
              <h5 className="mb-3">Login to stay connected.</h5>
              <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className=" mb-4"
                >
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
            <div className=" col-12 col-lg-6 d-flex justify-content-center animate__animated animate__fadeIn animate__delay-1s">
              <img
                className={`${login.loginImg} w-75`}
                src="https://i.ibb.co/qWncyyv/login.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <GoogleSignIn></GoogleSignIn>
    </div>
  );
};

export default Login;
