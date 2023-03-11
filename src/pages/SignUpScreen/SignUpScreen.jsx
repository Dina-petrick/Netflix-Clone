import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import SignInScreen from "../SignInScreen/SignInScreen";
import { auth } from "../../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const [login, setLogin] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((getAuth) => {
        return getAuth;
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="SignUpScreen">
      {login ? (
        <SignInScreen />
      ) : (
        <div className="signUpScreen__form">
          <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} type="email" placeholder="Email Address..." />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              <span className="signUpScreen__grayBtn">Existing User </span>
              <span
                className="signUpScreen_link"
                onClick={() => setLogin(true)}
              >
                Sign In
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpScreen;
