import React from "react";
import { useState } from "react";
import "./AstroCurricu.css";

import { data, data1 } from "../../data/Austro";

const NakshatraCurricu = () => {
  const [active, setActive] = useState(0);
  const [activeAdvanced, setActiveAdvanced] = useState(null);

  //  basic curriculum
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  // advamced curriculum
  const toggleAdvanced = (index) => {
    setActiveAdvanced(activeAdvanced === index ? null : index);
  };
  return (
    <div className="curriculum">
      <div className="heading">
        <h1>
          What You <span>Will Learn</span>
        </h1>
      </div>

      <h3 className="sub">
        Introduction to Vedic Astrology & the 27 Nakshatras{" "}
        <span>(4-4.5 Months)</span>
      </h3>

      <h3 className="sub">
        Module 1 : The basics - <span>What are Nakshatras?</span>
      </h3>

      <div className="accordion">
        {data.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggle(index)}>
              {item.title}
              <span>{active === index ? "▲" : "▼"}</span>
            </div>

            {active === index && (
              <div className="accordion-body">
                <ul>
                  {item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="sub">
        Module 2 : <span>Meet the 27 Nakshatras</span>
      </h3>

      <div className="accordion">
        {data1.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAdvanced(index)}
            >
              {item.title}
              <span>{activeAdvanced === index ? "▲" : "▼"}</span>
            </div>

            {activeAdvanced === index && (
              <div className="accordion-body">
                <ul>
                  {item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="download">
        <a href="/Astrology.pdf" download="Astrology-Brochure.pdf">
          <button>Download Brochure</button>
        </a>
      </div>
    </div>
  );
};

export default React.memo(NakshatraCurricu);
