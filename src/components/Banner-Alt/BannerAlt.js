import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./bannerAlt.css";

const BannerAlt = () => {
  return (
    <div className="bannerAlt">
      <Carousel
        showArrows={true}
        dynamicHeight={false}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        width={"80vw"}
      >
        <div key="slide1">
          <img src="https://images.unsplash.com/photo-1581094651181-35942459ef62?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div key="slide2">
          <img src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div key="slide3">
          <img src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div key="slide4">
          <img src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div key="slide5">
          <img src="https://images.unsplash.com/photo-1581094651181-35942459ef62?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div key="slide6">
          <img src="https://images.unsplash.com/photo-1581094651181-35942459ef62?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerAlt;
