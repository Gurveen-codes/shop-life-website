import React from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav class={classes.mainNav}>
      <ul class={classes.nav}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Press Kit</a>
        </li>
        <li>
          <a href="#">Seller</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
