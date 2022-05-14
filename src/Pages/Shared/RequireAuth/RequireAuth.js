import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  let location = useLocation();
  const handleSendVerification = async () => {
    await sendEmailVerification();
    toast("Verification email send", {
      autoClose: 1000,
      position: "top-center",
    });
  };
  if (loading) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center my-5 py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (!user?.emailVerified && user?.providerData[0]?.providerId == "password") {
    return (
      <>
        <div className="py-5 text-center">
          <h2 className="text-warning mb-4">
            Your email is not verified. Please verify first then reload page.
          </h2>
          <button
            onClick={handleSendVerification}
            className="btn btn-outline-primary"
          >
            Send verification email
          </button>
        </div>
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
