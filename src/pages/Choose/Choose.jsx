import React from "react";
import "./Choose.css";

import img1 from "../../assets/vedic.png";
import img2 from "../../assets/vedic.png";
import img3 from "../../assets/vedic.png";
import img4 from "../../assets/vedic.png";

const choose = [
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
];

const Choose = () => {
  return (
    <section className="choose-container">

      {/* TOP SECTION */}
      <div className="choose-top">
        <div className="heading">
        <h1>
          Why Choose <span>Academy Of Vedic Vidya</span>
        </h1>
        </div>

        <p>
          At the Academy of Vedic Vidya, we are dedicated to spreading the timeless knowledge of Vedic sciences, helping individuals discover the power within themselves through ancient teachings.
        </p>
      </div>

      {/* CARDS */}
      <div className="choose-grid">
        {choose.map((item, index) => (
          <div className="choose-card" key={index}>
            <div className="choose-img">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="register">
        <button>Register Now ➢</button>
      </div>

    </section>
  );
};

export default Choose;