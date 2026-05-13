import React from "react";
import "./Choose.css";

import { choose } from "../../data/choose";

const Choose = () => {
  return (
    <section className="choose-container">

      {/* TOP SECTION */}
      <div className="choose-top">
        <div className="heading">
        <h1>
          Why Choose <span>Academy Of Jiivaastro</span>
        </h1>
        </div>

        <p>
          At the Academy of Jiivaastro, we are dedicated to spreading the timeless knowledge of Vedic sciences, helping individuals discover the power within themselves through ancient teachings.
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