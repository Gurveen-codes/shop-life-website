import React from "react";
import classNamees from "./footer.module.css";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footerArea">
      <footer className="footer">
        <div className="footer_social">
          <h1 className="footer_logo">Tvish</h1>
          <div className="icons">
            <a href="#">
              <i class="lni lni-twitter-original"></i>
            </a>
            <a href="#">
              <i class="lni lni-facebook-original"></i>
            </a>
            <a href="#">
              <i class="lni lni-instagram-original"></i>
            </a>
          </div>
        </div>

        <ul className="footer_nav">
          <li className="nav_item">
            <h2 className="nav_title">Download</h2>

            <ul className="nav_ul">
              <li>
                <a href="#">Get Tvish for Android</a>
              </li>

              <li>
                <a href="#">Get Tvish for iOS</a>
              </li>
            </ul>
          </li>

          <li className="nav_item ">
            <h2 className="nav_title">Resources</h2>

            <ul className="nav_ul ">
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Seller Portal</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </li>

          <li className="nav_item">
            <h2 className="nav_title">Legal</h2>

            <ul className="nav_ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2021 Tvish. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
