import React from "react";
import "./Course.css";

import { courses } from "../../data/courses";

const Course = () => {
  return (
    <div className="course">
      {/* TOP */}
      <div className="course-top">
        <div className="heading">
          <h1>
           Jiivaastro Courses <span>Offered</span>
          </h1>
        </div>

        <p>
          We offer a wide range of Jiivaastro courses designed to
          deepen your understanding of ancient vedic wisdom. Explore our
          expertly crafted programs in:
        </p>
      </div>

      {/* CARDS */}
      <div className="course-grid">
        {courses.map((item, index) => (
          <div className="course-card" key={index}>
            <div className="circle">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="learn-btn">Learn More →</button>
          </div>
        ))}
      </div>

      <div className="course-view">
        <button>View All Courses →</button>
      </div>
    </div>
  );
};

export default React.memo(Course);
