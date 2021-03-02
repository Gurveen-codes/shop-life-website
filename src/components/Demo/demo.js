import React from "react";

import apple from "../../images/apple_img_v2.png";
import classes from "./demo.module.css";

const Demo = () => {
  return (
    <section className={classes.demoArea}>
      <h1 className={classes.demo_title}>
        Revolutionalize your shopping experience{" "}
      </h1>
      <ul className={classes.tilesWrap}>
        <li>
          <h2>01</h2>
          <h3>Download Tvish App</h3>
          <p>Get Tvish app from Google Play Store or Apple Store.</p>
          <img src={apple} alt="apple"></img>
        </li>
        <li>
          <h2>02</h2>
          <h3>Choose Product</h3>
          <p>Select any item from our wide range of products.</p>
          <img src={apple} alt="apple"></img>
        </li>
        <li>
          <h2>03</h2>
          <h3>Point Camera</h3>
          <p>
            Point your smartphone's camera based on selected product and
            experience our AR magic.
          </p>
          <img src={apple} alt="apple"></img>
        </li>
      </ul>
    </section>
  );
};

export default Demo;
