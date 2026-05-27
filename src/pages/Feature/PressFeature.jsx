import React from "react";
import "./PressFeature.css";

import { courses } from "../../data/courses";

const PressFeature = () => {
  return (
    <div className="course">
      {/* TOP */}
      <div className="course-top">
        <div className="heading1">
          <h1>
           We Are <span>Featured In</span>
          </h1>
        </div>

      </div>

      {/* CARDS */}
      <div className="course-grid">
        {courses.map((item, index) => (
          <div className="course-card1" key={index}>
            <div className="circle">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="learn-btn">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PressFeature);
