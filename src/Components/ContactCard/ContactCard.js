import React, { useState, useRef } from "react";
import "./ContactCard.css";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c853xkf",
        "template_67kv4hk",
        form.current,
        "B3EpBB3odD8guq2H6"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message");
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="contact-card-title">LET'S WORK TOGETHER</h1>
            <br />
          </div>
        </div>
      </div>
      <div className={`cont-container ${isSignUp ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form ref={form} onSubmit={sendEmail} className="sign-in-form">
              <h2 className="title">GET IN TOUCH</h2>
              <div className="input-field">
                <FaUser className="icon" />
                <input type="text" placeholder="Your Name" name="user_name" />
              </div>
              <div className="input-field">
                <MdAlternateEmail className="icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                />
              </div>
              <div className="input-field">
                <BiMessageRoundedDetail className="icon" />
                <input type="text" placeholder="Your Message" name="message" />
              </div>
              <input type="submit" value="Send" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">GET IN TOUCH</h2>
              <div className="input-field">
                <FaUser className="icon" />
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-field">
                <MdAlternateEmail className="icon" />
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-field">
                <BiMessageRoundedDetail className="icon" />
                <input type="text" placeholder="Your Message" />
              </div>
              <input type="submit" className="btn" value="Send" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Your are a Developer ?</h3>
              <p>
                Contact us and we will be happy to talk to you, We will contact
                you shortly to let you know.
              </p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Click Here
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>You are a Client ?</h3>
              <p>
                Contact us and we will be happy to talk to you, We will contact
                you shortly to let you know.
              </p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUpForm;
