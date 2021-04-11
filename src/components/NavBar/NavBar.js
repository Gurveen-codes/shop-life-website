import React from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
	return (
		<nav className={classes.mainNav}>
			<ul className={classes.nav}>
				<li className={classes.nav_logo}>Shop-Life</li>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
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
