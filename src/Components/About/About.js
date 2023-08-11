import React from "react";
import "./About.css";
import { TbWorldCode } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { PiDesktopTower } from "react-icons/pi";
import ContactCard from "../../Components/ContactCard/ContactCard";

const About = () => {
  return (
    <>
      <div className="About-Container">
        <h1 className="About-title">You really want know about us ?</h1>
        <div className="About-intro">
          <p>
            Tunisia Saudi Smart Technology is a sophisticated IT and e marketing
            company we specialise in creating and promoting websites and
            applications using different coding languages and professional
            skills . We offer innovative solutions tailored to meet our clients'
            diverse needs, combining creative expertise with the latest IT
            technology to ensure effective and user-friendly digital services.We
            help design marketing strategies that will ensure the success of our
            product.
          </p>
          <img className="about-logo" src="./tsast-about.png" alt="" />
        </div>
        <div className="About-p2">
          <h1 className="About-title">WHY PEOPLE CHOOSE US ?</h1>
          <p>
            Tunisia Saudi Smart Technology is your Gateway to Innovation we are
            a dynamic and innovative IT and e marketing company we specialise in
            creating and promoting sophisticated websites and applications. Our
            team of skilled professionals stays ahead of industry trends and
            employs the latest technologies and marketing strategies to ensure
            our clients stay ahead of the competition. With a commitment to
            excellence, innovation, and customer satisfaction, we are dedicated
            to helping businesses thrive in the digital realm and make a lasting
            impression on their audiences. With a keen understanding of the
            rapidly evolving digital landscape, we combine creative expertise
            with technological know-how to design and build user-friendly and
            aesthetically pleasing websites and applications. Our focus extends
            beyond just creating digital assets; we also excel in promoting
            these solutions effectively to maximise their reach and impact. us
            because we are an advanced company . We use various coding languages
            and IT professional skills providing innovative solutions that meet
            our clients' diverse and exact needs . Our expertise in IT
            technology ensures effective and user-friendly digital services.same
            for our unmatched creative designs
          </p>
        </div>
        <div className="about-img"></div>
        <div className="offer-title">
          <h1>WHAT WE OFFER</h1>
        </div>
        <div className="offer-container">
          <div className="offer-box">
            <TbWorldCode className="offer-icon" />
            <h6>Chat to Support</h6>
            <span>SPEAK TO OUR FRIENDLY TEAM</span>
            <span>contact@tsast.net</span>
          </div>
          <div className="offer-box">
            <MdWeb className="offer-icon" />
            <h6>Visit Us</h6>
            <span>Visit Our Office</span>
          </div>
          <div className="offer-box">
            <PiDesktopTower className="offer-icon" />
            <h6>Call Us</h6>
            <span>MON-SAT From 9AM To 5 PM</span>
            <span>31 100 115 - 29 750 723</span>
          </div>
        </div>
      </div>
      <ContactCard />
    </>
  );
};

export default About;
