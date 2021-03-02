import React from "react";
import "./trust.css";

const TrustUs = () => {
  const trustArr = [
    {
      title: "Try on Smartphone",
      icon: "lni lni-mobile",
      desc: "No need to go to a shop to try any wearable!",
    },
    {
      title: "Capture and Share",
      icon: "lni lni-camera",
      desc: "Share your best finds with your friends!",
    },
    {
      title: "Made in India",
      icon: "lni lni-heart-filled",
      desc: "Just download and start trying out!",
    },
    {
      title: "One of a kind",
      icon: "lni lni-star-filled",
      desc: "Soon coming up with all kinds of unique try-ons",
    },
  ];
  return (
    <section className="trustArea">
      <h1>Why trust us?</h1>
      <div className="trustContainer">
        {trustArr.map((el) => (
          <div className="trust">
            <i className={el.icon}></i>
            <h2>{el.title}</h2>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustUs;
