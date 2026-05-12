import React, { useState, useEffect } from "react";
import "./Student.css";

import img from "../../assets/map.png";

const data = [
  { id: 1, videoId: "4Ef_NCKcBZg" },
  { id: 2, videoId: "ysz5S6PUM-U" },
  { id: 3, videoId: "ScMzIvxBSi4" },
  { id: 4, videoId: "4Ef_NCKcBZg" },
  { id: 5, videoId: "ysz5S6PUM-U" },
  { id: 6, videoId: "4Ef_NCKcBZg" },
  { id: 7, videoId: "ScMzIvxBSi4" },
  { id: 8, videoId: "ScMzIvxBSi4" },
];

const Student = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === data.length - 3 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="student-container">
      {/* TITLE */}
      <h2 className="student-title">
        What Our <span>Students Say</span>
      </h2>

      {/* SLIDER */}
     <div className="slider-wrapper">
  <div
    className="slider"
    style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
  >
    {data.map((item) => (
      <div className="slide" key={item.id}>
        <iframe
          src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
          title="Student Review"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>
</div>

      {/* DOTS */}
      <div className="dots">
        {data.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      {/* BUTTON */}
      <div className="student-btn">
        <button>View Our Courses →</button>
      </div>

      <div className="happy-container">
        {/* LEFT TEXT */}
        <div className="happy-text">
          <h2>Happy to help you!</h2>

          <p>
            Need more details about our occult science courses? Our expert
            academic counsellors will be happy to patiently explain everything
            that you want to know.
          </p>

          {/* BUTTON GROUP */}
          <div className="happy-btn">
            <button className="btn-primary">Talk to an expert</button>

            <div className="divider">Or</div>

            <button className="btn-secondary">Admission Form</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="happy-image">
          <img src={img} alt="Happy Student" />
        </div>
      </div>
    </div>
  );
};

export default Student;
