import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>About Me</h3>
              <p>
                Hi, I'm Susmita Das, a web developer based in India. I specialize in building responsive and user-friendly websites using the latest technologies.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Useful Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Contact Me</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-map-marker"></i> Assam, Guwahati, India
                </li>
                <li>
                  <i className="fa fa-phone"></i> (+91) 7002138607
                </li>
                <li>
                  <i className="fa fa-envelope"></i> susmitad7373@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copy">
                <p>&copy; 2023 MyPortfolio. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      );
    </>
  );
};

export default Footer;
