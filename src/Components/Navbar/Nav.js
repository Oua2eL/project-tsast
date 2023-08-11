import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <>
      <div className="nav-container">
        <img className="Nav-logo" src="./tsast_logo.png" alt="" />
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default Navbar;
