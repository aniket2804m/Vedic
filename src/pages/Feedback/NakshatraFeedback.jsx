import React from "react";
import "./AstroFeedback.css";

const NakshatraFeedback = () => {
  return (
    <div className="feedback">
      <div className="heading">
        <h1>
          About <span>Nakshatra Astrology Course</span>
        </h1>
      </div>

      <div className="feedback-container">
        {/* LEFT SIDE */}
        <div className="feedback-left">
          <div className="pill">
            Trusted By <br /> <span>1,00,000+ Students</span>
          </div>
          <div className="pill">
            Successful Batches <br /> <span>1,500+ Globally</span>
          </div>
          <div className="pill">
            Highly Rated <br /> <span>4.8★ on Google</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="feedback-right">
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/4Ef_NCKcBZg"
              title="Student Review"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NakshatraFeedback;
