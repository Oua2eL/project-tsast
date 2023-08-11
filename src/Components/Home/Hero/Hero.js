import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Intro from "../Intro/Intro";
import Service from "../Service/Service";
import StaffCard from "../Staff/StaffCard";
import ContactCard from "../../ContactCard/ContactCard";
import BlogSection from "../BlogSection/BlogSection";
import NewSlider from "../ProjectSlider/NewSlider";


const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-logo">
          <img src="./logo_animated.png" alt="" />
        </div>
        <div>
          <div className="text-container">
            <div className="stack" style={{ "--stacks": 3 }}>
              <span style={{ "--index": 0 }}>
                Digital Marketing and it agency
              </span>
              <span style={{ "--index": 1 }}>
                Digital Marketing and it agency
              </span>
              <span style={{ "--index": 2 }}>
                Digital Marketing and it agency
              </span>
              <div className="container-typed">
                <TypeAnimation
                  sequence={["Let's Get Started", 1000]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <Service />
      <StaffCard />
      <NewSlider />
      <BlogSection />
      <ContactCard />
    </>
  );
};

export default Hero;
