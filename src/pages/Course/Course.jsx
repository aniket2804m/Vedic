import React from "react";
import "./Course.css";
import img1 from "../../assets/vedic.png";
import img2 from "../../assets/vedic.png";
import img3 from "../../assets/vedic.png";
import img4 from "../../assets/vedic.png";

const courses = [
  {
    title: "Vedic Mastery Retainer Program",
    desc: "Vedic Mastery Retainer Program is a deeply structured journey that brings together ancient Vedic wisdom, personal embodiment, & modern consultation frameworks into one integrated path.",
    image: img1,
  },
  {
    title: "Vedic Practitioner Residency Program",
    desc: "Vedic Practitioner Residency is a 6-month intensive applied training program to bridge the biggest gap in Vedic education — the gap between learning concepts and practicing confidently.",
    image: img2,
  },
  {
    title: "Vedic Astrology Course",
    desc: "Astrology explores the influence of celestial bodies on human life, offering insights into personality, relationships, and destiny based on cosmic patterns.",
    image: img3,
  },
  {
    title: "Vedic Numerology Course",
    desc: "Numerology is the mystical study of numbers and their influence on our lives, revealing deeper insights into personality, destiny, career and life patterns.",
    image: img4,
  },
  {
    title: "Vedic Mastery Retainer Program",
    desc: "Vedic Mastery Retainer Program is a deeply structured journey that brings together ancient Vedic wisdom, personal embodiment, & modern consultation frameworks into one integrated path.",
    image: img1,
  },
  {
    title: "Vedic Practitioner Residency Program",
    desc: "Vedic Practitioner Residency is a 6-month intensive applied training program to bridge the biggest gap in Vedic education — the gap between learning concepts and practicing confidently.",
    image: img2,
  },
  {
    title: "Vedic Astrology Course",
    desc: "Astrology explores the influence of celestial bodies on human life, offering insights into personality, relationships, and destiny based on cosmic patterns.",
    image: img3,
  },
  {
    title: "Vedic Numerology Course",
    desc: "Numerology is the mystical study of numbers and their influence on our lives, revealing deeper insights into personality, destiny, career and life patterns.",
    image: img4,
  },
];

const Course = () => {
  return (
    <div className="course">
      {/* TOP */}
      <div className="course-top">
        <div className="heading">
          <h1>
            Courses <span>Offered</span>
          </h1>
        </div>

        <p>
          We offer a wide range of Vedic & Occult science courses designed to
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

export default Course;
