import React from "react";
import "./Service.css";
import InfiniteLoopSlider from "../Service/InfiniteLoopSlider";
import InfiniteLoop from "../Service/InfiniteLoop";

const Service = () => {
  return (
    <>
      <div className="Service-intro">
        <h2>Our Service</h2>
        <h3>TSAST IS DEVIDED INTO TWO OFFICIAL DEPARTMENTS</h3>
      </div>
          <div className="Marketing-container">
            <div className="Marketing-left">
              <h3>MARKETING</h3>
              <img src="./Service1.png" alt="" />
              <h4>The strategies we use :</h4>
              <InfiniteLoop />
            </div>
            <div className="Marketing-right">
              <h3>IT DEVELOPMENT</h3>
              <img src="./Service2.png" alt="" />
              <h4>The languages we use :</h4>
              <InfiniteLoopSlider />
            </div>
          </div>
    </>
  );
};

export default Service;
