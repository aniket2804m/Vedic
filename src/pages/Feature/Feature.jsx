import React from "react";
import img1 from "../../assets/press/Press1.png";
import img2 from "../../assets/vedic.png";
import img3 from "../../assets/vedic.png";

import "./Feature.css";

const Feature = () => {
  return (
    <div className="img-slider">

      <div className="top">
       <div className="heading">
    <h1>
      Featured on Top <span>News Channels</span>
    </h1>
  </div>
      </div>

      <div className="slider">
        <div className="slide-track">

          {/* ORIGINAL */}
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />

          {/* DUPLICATE (important for infinite loop) */}
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />

        </div>
      </div>

    </div>
  );
};

export default React.memo(Feature);