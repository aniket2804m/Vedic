import React from 'react'
import { useState } from 'react';
import "./AstroCurricu.css";

import { data1 } from "../../data/kp";

const KpCurricu = () => {
     const [active, setActive] = useState(0);

      //  basic curriculum
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="curriculum">
      <div className="heading">
        <h1>
          What You <span>Will Learn</span>
        </h1>
      </div>

            <h3 className="sub">
              Professional Certification in KP Astrology <span>(3.5 Months)</span>
            </h3>
    
            <div className="accordion">
              {data1.map((item, index) => (
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
    
    
            <div className="download">
              <button>Download Brochure</button>
            </div>
          </div>
  )
}

export default KpCurricu
