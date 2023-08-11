import React from "react";
import "./NewSlider.css";

const NewSlider = () => {
  const nextClickHandler = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const prevClickHandler = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };

  return (
    <>
      <div className="Project-title">
        <h2>Our Projects</h2>
      </div>
      <div className="Slide-container">
        <div className="slide">
          <div
            className="item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/OurWork/backgroundProj.png)`,
            }}
          >
            <div className="content2">
              <div className="name">MoveOut</div>
              <div className="des">
                is a platform that facilitate your moving experience by
                connecting you with the ideal logistics team, managing
                everything from packing and transportation to the final
                unpacking stage
              </div>
              <button className="btn-link">See More</button>
            </div>
            <div className="right-img">
                <img src="./OurWork/moveoutnbg (1).png" />
              </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/OurWork/backgroundProj.png)`,
            }}
          >
            <div className="content2">
              <div className="name">TSAST</div>
              <div className="des">
                is an IT and marketing company. We specialise in the development
                and promotion of advanced websites and applications, creating
                effective and innovative solutions for various life problems.{" "}
              </div>
              <button className="btn-link">See More</button>
            </div>
            <div className="right-img">
                <img src="./OurWork/tsastnbg (1).png" />
              </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/OurWork/backgroundProj.png)`,
            }}
          >
            <div className="content2">
              <div className="name">Ramcha</div>
              <div className="des">
                is a platform that offers a variety of manual labor services,
                covering all aspects of life. Ramcha brings together a network
                of skilled professionals at the service of website or mobile
                application users.
              </div>
              <button className="btn-link">See More</button>
            </div>
            <div className="right-img">
                <img src="./OurWork/ramchanbg (1).png" />
              </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/OurWork/backgroundProj.png)`,
            }}
          >
            <div className="content2">
              <div className="name">Cubexpromax</div>
              <div className="des">
                is a website that provides job opportunities abroad, linking job
                seekers with the exciting chance of taking on new work
                adventures.
              </div>
              <a href="http://cubexpro.net/" target="_blank">
              <button className="btn-link">See More</button></a>
            </div>
            <div className="right-img">
                <img src="./OurWork/cubexnbg.png" />
              </div>
          </div>
        </div>
        <div className="button">
          <button className="prev" onClick={prevClickHandler}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={nextClickHandler}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewSlider;
