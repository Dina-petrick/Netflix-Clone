import React, { useRef, useState } from "react";
import "./SignInScreen.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import SignUpScreen from "../SignUpScreen/SignUpScreen";

const SignInScreen = () => {
  const [signUp, setSignUp] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      {signUp ? (
        <SignUpScreen />
      ) : (
        <div className="signInScreen">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email Address..." />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={SignIn}>Sign In</button>
            <h4>
              <span className="signInScreen__gray">New To Netflix </span>
              <span
                className="signInScreen__Link"
                onClick={() => setSignUp(true)}
              >
                Sign Up
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignInScreen;
