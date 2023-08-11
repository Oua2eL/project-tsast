import React from "react";
import "./Contact.css";
import { BsChatDots } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import ContactCard from "../../Components/ContactCard/ContactCard";


const Contact = () => {
  return (
    <>
      <h1 className="Contact-title">CONTACT OUR FRIENDLY TEAM</h1>
      <div className="Contact-container">
          <div className="Support-box">
            <a href="mailto:contact@tsast.net">
              <BsChatDots className="contact-icon" />
              <h6>Chat to Support</h6>
              <span>SPEAK TO OUR FRIENDLY TEAM</span>
              <span>contact@tsast.net</span>
            </a>
          </div>
          <div className="Support-box">
            <a
              href="https://www.google.com/maps?q=35.822167,10.629013"
              target="_blank"
            >
              <BiMap className="contact-icon" />
              <h6>Visit Us</h6>
              <span>Visit Our Office</span>
            </a>
          </div>
          <div className="Support-box">
            <BsTelephone className="contact-icon" />
            <h6>Call Us</h6>
            <span>MON-SAT From 9AM To 5 PM</span>
            <span>31 100 115 - 29 750 723</span>
          </div>
        </div>
      <ContactCard />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3235.0940967737924!2d10.626438075794029!3d35.82216697254214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ5JzE5LjgiTiAxMMKwMzcnNDQuNSJF!5e0!3m2!1sfr!2stn!4v1690966586356!5m2!1sfr!2stn"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
