import React from "react";
import "../../Blog/Blog.css";
import "./BlogDash.css";

const Blog = () => {
  return (
    <>
      <div className="section-title">
        <h2>Blog Upload and Delete</h2>
      </div>
      <section className="blog section" id="blog">
        <div className="contaiiner">
          <div className="row"></div>
          <div className="row">
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg"
                    alt="Blog"
                  />
                </div>
                <div className="blog-info">
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, porro rem quod illo quam, eum alias id, repellendus
                    magni, quas.
                  </p>
                  <div className="btn-container">
                    <button className="btn-blog">Update</button>
                    <button className="btn-blog">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg"
                    alt="Blog"
                  />
                </div>
                <div className="blog-info">
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, porro rem quod illo quam, eum alias id, repellendus
                    magni, quas.
                  </p>
                  <div className="btn-container">
                    <button className="btn-blog">Update</button>
                    <button className="btn-blog"> Delete </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/05/23/09/39/bottles-5208806_960_720.jpg"
                    alt="Blog"
                  />
                </div>
                <div className="blog-info">
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore, porro rem quod illo quam, eum alias id, repellendus
                    magni, quas.
                  </p>
                  <div className="btn-container">
                    <button className="btn-blog"> Update </button>
                    <button className="btn-blog"> Delete </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
