import React from "react";
import apple_store_badge from "../../images/apple_img_v2.png";
import classes from "./download.module.css";

const Download = () => {
	return (
		<section className={classes.downloadArea}>
			<h1>Discover what all the buzz is about!</h1>
			<div className={classes.downloadLinks}>
				<a href="#">
					<img
						className={classes.googleBadge}
						alt="Get it on Google Play"
						src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
					/>
				</a>
				<a href="https://ibb.co/Pj5mhqk">
					<img
						className={classes.appleBadge}
						src={apple_store_badge}
						alt="apple-img-v2"
						border="0"
					/>
				</a>
			</div>
		</section>
	);
};

export default Download;
