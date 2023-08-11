import React from "react";
import "./BlogSection.css";

const BlogCard = () => {
  return (
    <div className="main">
      <div className="blg-text">
        <h2>Our Blog</h2>
      </div>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="./Blog/Coding.jpg" alt="Blog" />
              <div className="blog-date">Aug 2023</div>
            </div>
            <div className="card_content">
              <p className="card_text">
                Web development Is the process of building and maintaining
                websites using coding And design skills fulfil a vital service
                to a targeted audience. Curating the perfect space for the
                diverse group of users for multiple purposes, such as buying a
                product or offering a service. As technology advances and
                evolves at a rapid pace.
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="./Blog/Mobile-App.jpg" alt="" />
              <div className="blog-date">Aug 2023</div>
            </div>
            <div className="card_content">
              <p className="card_text">
                App development is a complementary process to web development,
                using the same technical skills in coding and designing to
                provide a more accessible and user-friendly experience on mobile
                devices. Available in different app stores like IOS and Google
                play store.
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="./Blog/Marketing.jpg" alt="" />
              <div className="blog-date">Aug 2023</div>
            </div>
            <div className="card_content">
              <p className="card_text">
                Marketing is the strategic process of promoting and selling
                products, services, or ideas to a target audience. Effective
                marketing helps businesses build brand awareness, attract new
                customers, and foster loyalty among existing ones. It enables
                companies to communicate their unique value proposition,
                positioning themselves as the preferred choice in a competitive
                marketplace.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlogCard;
