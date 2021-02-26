import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footerArea}>
      <div className={classes.footerContainer}>
        <h3>Downloads:</h3>
        <a href="#">Get Tvish for Android</a>
        <a href="#">Get Tvish for iOS</a>

        <h3>Follow Us:</h3>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>

        <h3>Contact Us:</h3>
        <a href="#">hello@test.com</a>
        <a href="#">+91 665544332</a>
      </div>
    </section>
  );
};

export default Footer;
