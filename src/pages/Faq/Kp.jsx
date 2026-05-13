import React, { useState } from "react";
import "./AstroFaq.css";

import { faqData } from "../../data/kp";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Frequently asked <span>questions</span>
      </h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <h4>{item.question}</h4>
              <span className="icon">
                {activeIndex === index ? "⌃" : "⌄"}
              </span>
            </div>

            <div
              className={`faq-body ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default FAQ;