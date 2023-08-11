import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <>
      <h2 className="intro-title1"> WELCOME TO OUR WEBSITE</h2>
      <div className="Intro-Container">
        <div className="intro-left">
          <h3 className="intro-title2">
            Our creativity <span> is YOUR </span>  start of <br /> successful projects
          </h3>
          <div className="intro-box">
            <p>
              We always strive to use high-quality technology so we can provide
              a good service with our professional team to make it happen your
              ideas. Accuracy and according to your expectations is our main
              goal.
            </p>
          </div>
        </div>
        <div className="intro-right">
          <img src="./intro-img.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Intro;
