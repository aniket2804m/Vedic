import React from "react";
import "./Happy.css";

import img from "../../assets/map.png";

const Happy = () => {
  return (
    <section className="happy-section">

      <div className="happy-container">

        {/* LEFT CONTENT */}
        <div className="happy-text">

          <h2>
            Happy to <span>help you!</span>
          </h2>

          <p>
            Need more details about our occult science courses?
            Our expert academic counsellors will patiently explain
            everything that you want to know.
          </p>

          {/* BUTTON GROUP */}
          <div className="happy-btn">

            <button className="btn-primary">
              Talk to an Expert
            </button>

            <div className="divider">OR</div>

            <button className="btn-secondary">
              Admission Form
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="happy-image">
          <img src={img} alt="Happy Student" />
        </div>

      </div>
    </section>
  );
};

export default React.memo(Happy);