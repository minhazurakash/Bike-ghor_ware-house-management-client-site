import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import signup from "./Signup.module.css";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword, createUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, user);
    createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (error) {
      const err = error.code.split("/")[1];
      toast.warning(err, { position: "top-center", autoClose: 2000 });
    }
    if (user) {
      navigate("/");
      toast.success("User created successfully", {
        autoClose: 1000,
        position: "top-center",
      });
    }
  }, [error, user]);

  return (
    <div className="container my-5">
      <div className=" d-flex justify-content-center py-4">
        <div className="l-side w-75 border p-4 rounded">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="signup-header text-primary mb-4">Sign up</h2>
              <h5 className="mb-3">Signup to stay connected.</h5>
              <Form onSubmit={handleSignUp}>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    onClick={() => setChecked(!checked)}
                    type="checkbox"
                    label="accept our terms and condition"
                  />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className=" mb-4"
                  disabled={!checked}
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
            <div className="r-side col-lg-6 d-flex justify-content-center animate__animated animate__fadeIn animate__delay-1s">
              <img
                className={`${signup.signupImg} w-75`}
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

export default Signup;
