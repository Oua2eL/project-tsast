import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <img className="footer-icon" src="./Footer-logo.png" alt="" />
            <p>
              TSAST is a development company for Digital marketing and IT
              services and products, based in Sousse and founded on the 15th of
              June 2023. We're a group of motivated and creative youngsters,
              always up for challenges and new ideas. But don't get us wrong
              when we say youngsters, we have years of experience as freelancers
              in different kinds of fields and we're sure to transform your
              ideas into reality.
            </p>
          </div>
          <div className="col">
            <h3>
              Info
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Imm Zarrouk, 19Av, Abou Hamed Ghazeli .4002.Sousse</p>
            <h5>31 100 115</h5>
            <h5>29 750 723</h5>
            <h4 className="email">contact@tsast.net</h4>
          </div>
          <div className="col">
            <h3>
              Quick Links{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/Blog">Blog</a>
              </li>
              <li>
                <a href="/Policy">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Social Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100095115752874"
                target="_blank"
              >
                <AiFillFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/tsast.smart.tech/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <AiFillInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/tsast-tunisia-saudi-smart-technology-297443284/"
                target="_blank"
              >
                <AiFillLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright © 2023 TSAST</p>
      </footer>
    </>
  );
};

export default Footer;
