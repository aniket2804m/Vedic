import React from 'react'
import { useRef, useEffect } from 'react';
import "./AstroReview.css";

import img from "../../assets/vedic.png";

import { reviews } from '../../data/Austro';

const AstroReview = () => {
      const sliderRef = useRef();

      // review card slider auto
        useEffect(() => {
          const interval = setInterval(() => {
            if (sliderRef.current) {
              sliderRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
              });
      
              // loop back
              if (
                sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
                sliderRef.current.scrollWidth
              ) {
                sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }
            }
          }, 3000);
      
          return () => clearInterval(interval);
        }, []);
  return (
    <div className="review">
        <div className="heading2">
          <h1>
            Why Everyone’s Talking About <span>Our Academy</span>
          </h1>
        </div>

        <div className="review-container">
          {/* LEFT SIDE */}
          <div className="left-part">
            <img src={img} alt="logo" />

            <h4>Academy of Jiivaastro | Best Jiivaastro Academy in Pune</h4>

            <div className="stars">★★★★★</div>

            <p>943 Google reviews</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="review-slider-box">
            <div className="review-slider" ref={sliderRef}>
              {reviews.map((item, index) => (
                <div className="review-card" key={index}>
                  <div className="top">
                    <div className="avatar">{item.name[0]}</div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.time}</p>
                    </div>
                  </div>

                  <div className="stars">★★★★★</div>

                  <p className="review-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="review-btn">
          <button>Register Now</button>
        </div>
      </div>
  )
}

export default React.memo(AstroReview);
