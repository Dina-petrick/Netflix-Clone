import React, { useState } from "react";

import logo from "../../image/Navbar/logo.png";

import SignInScreen from "../SignInScreen/SignInScreen";

import netflixBackground from "../../image/loginScreen/background.jpg";

import "./loginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${netflixBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="loginScreen"
    >
      <div className="loginScreen__background">
        <img src={logo} alt="loginScreen_logo" className="loginScreen_logo" />
        <button onClick={() => setSignIn(!signIn)} className="loginScreen_btn">
          sign In
        </button>
        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input
                  className="loginScreenInput__form"
                  type="email"
                  placeholder="Email Address..."
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
