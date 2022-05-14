import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    if (error) {
      const err = error.code.split("/")[1];
      toast.warning(err, { position: "top-center", autoClose: 2000 });
    } else {
      toast.success("Email Send", { position: "top-center", autoClose: 2000 });
    }
  };
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
            <Form onSubmit={handleReset}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit" className=" mb-4">
                Reset
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
