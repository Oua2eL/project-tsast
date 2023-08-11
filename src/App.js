import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Home/Hero/Hero";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Policy from "./Components/Policy/Policy";
import Nav from "./Components/Navbar/Nav";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

