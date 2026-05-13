import React, { useState, useEffect } from "react";
import "./Student.css";

const data = [
  { id: 1, videoId: "4Ef_NCKcBZg" },
  { id: 2, videoId: "ysz5S6PUM-U" },
  { id: 3, videoId: "ScMzIvxBSi4" },
  { id: 4, videoId: "4Ef_NCKcBZg" },
  
];

const Student = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === data.length - 1 ? 0 : prev + 1
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
  style={{
    transform: `translateX(${current * 100}%)`,
  }}
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

      
    </div>
  );
};

export default Student;
