import React from "react";
import { lazy, Suspense } from "react";
import "./AstroForm.css";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const LalForm = () => {

  const Form = lazy(() => import("../../pages/Form/Form"));

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">Lal Kitab Course</h1>
        </div>
        <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
          Become a Professional Lal Kitab Astrologer
        </h3>

        <p>
          Discover the secrets of destiny with our Lal Kitab course online,
          designed for beginners as well as advanced learners. Our Lal Kitab
          classes are structured to help you understand planetary remedies,
          astrological predictions, and unique chart analysis techniques that
          set Lal Kitab apart.
        </p>

        <p>
          Whether you’re just starting out or looking for deeper knowledge, our
          Lal Kitab advance course provides step-by-step training by experienced
          astrologers. This course is perfect for those who wish to learn Lal
          Kitab astrology from the comfort of their home.
        </p>

        <p>
          We offer a professional Lal Kitab astrology course with lifetime
          access, personalized guidance, and a recognized certification on
          completion. This Lal Kitab course helps you gain practical insights
          and apply ancient wisdom to real-life situations.
        </p>

        <p>
          Join hundreds of students who have transformed their lives through
          Jiivaastro remedies and Lal Kitab principles.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-content">
        <ErrorBoundary>
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Form />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default React.memo(LalForm);
