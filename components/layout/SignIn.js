import React from "react";
import classes from "./SignIn.module.css";
import { signInWithGoogle } from "../../Firebase";

function SignIn() {
  return (
    <div className={classes.boxx}>
      <h2>
        Please{" "}
        <u className={classes.underL} onClick={signInWithGoogle}>
          Sign In
        </u>{" "}
        here to continue
      </h2>
    </div>
  );
}

export default SignIn;
