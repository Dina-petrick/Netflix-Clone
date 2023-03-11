import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
//custom css
import "./Navbar.css";

//import Image
import logo from "../../image/Navbar/logo.png";
import avatar from "../../image/Navbar/avatar.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transtionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transtionNavbar);
    return () => window.removeEventListener("scroll", transtionNavbar);
  });

  return (
    <div className="Navbar">
      <nav className={`${show && "nav__black"}`}>
        <div className="nav_contents">
          <Link to="/">
            <img src={logo} alt="logo" className="nav_logo" />
          </Link>
          <Link to="/Profile">
            <img src={avatar} alt="avatar" className="nav_avatar" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
