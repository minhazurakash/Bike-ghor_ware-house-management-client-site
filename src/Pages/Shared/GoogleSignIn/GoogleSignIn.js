import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const GoogleSignIn = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  console.log(user);

  return (
    <div className="container text-center py-3">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-primary"
      >
        Sign In With GOogle
      </button>
    </div>
  );
};

export default GoogleSignIn;
