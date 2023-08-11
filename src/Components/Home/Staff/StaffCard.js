import React from "react";
import "./StaffCard.css";

const OurTeam = () => {
  return (
    <>
      <h1 className="team-title">Our Crew</h1>
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="our-team">
              <div className="team-img">
                <img src="./Staff/sarra.png" alt="" />
              </div>
              <div className="team-content">
                <h3 className="name"> SARAH BRAHIM </h3>
                <span className="post">SOFTWARE ENGINEERING</span>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="our-team">
              <div className="team-img">
                <img src="./Staff/wael.png" alt="" />
              </div>
              <div className="team-content">
                <h3 className="name"> WAEL HASHASSI </h3>
                <span className="post">FULL STACK DEVELOPER</span>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="our-team">
              <div className="team-img">
                <img src="./Staff/sayef.png" alt="" />
              </div>
              <div className="team-content">
                <h3 className="name"> SAIF THAMER </h3>
                <span className="post">FULL STACK DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
