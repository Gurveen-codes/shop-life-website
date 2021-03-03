import React, { useState, useEffect, useRef } from "react";
import "./banner.css";

const Banner = () => {
  const [cellCount, setCellCount] = useState(9);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  // const rotateCarousel = () => {
  //   var carousel = carouselRef.current;
  //   var angle = (selectedIndex / cellCount) * -360;
  //   carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";

  //   // var current = carouselRef.current.children[selectedIndex];
  //   // current.classList.add("active");
  // };
  useEffect(() => {
    var carousel = carouselRef.current;
    var angle = (selectedIndex / cellCount) * -360;
    var radius = Math.round(
      carouselRef.current.offsetWidth / 2 / Math.tan(Math.PI / cellCount)
    );

    carousel.style.transform =
      "translateZ(-" + radius + "px) rotateY(" + angle + "deg)";

    console.log(carouselRef.current.offsetWidth);
  }, [selectedIndex, cellCount]);

  const previous = () => {
    // rotateCarousel();
    setSelectedIndex((x) => x - 1);
  };

  const next = () => {
    // rotateCarousel();
    setSelectedIndex((x) => x + 1);
  };

  return (
    <section className="bannerArea">
      <div className="scene">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel__cell active">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
          <div className="carousel__cell">9</div>
        </div>
      </div>
      <p>
        <button className="previous-button" onClick={previous}>
          Previous
        </button>
        <button className="next-button" onClick={next}>
          Next
        </button>
      </p>
    </section>
  );
};

export default Banner;
