import React from "react";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

import "./Press.css";
import img from "../../assets/vedic.png";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Course = lazy(() => import("../../pages/Feature/PressFeature"));

const Press = () => {

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="home">
        {/* LEFT */}
        <div className="home-left">
          <h1>
                  AVV <br />
            News <span>Room</span>
          </h1>

          <p>
           Explore our official news articles and stay informed about our company’s latest milestones and developments.
          </p>

          <button className="home-btn" onClick={() => navigate("/explore")}>
            Explore Courses ↗
          </button>

          <div className="students">
            <p className="badge">Over 1 Lakh Satisfied Learners Globally</p>

          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <img src={img} alt="Jiivaastro guru" />
        </div>
      </section>

        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Course  />
         </Suspense>
      </ErrorBoundary>

      

      
    </div>
  );
};

export default Press;
