import React from "react";
import { lazy, Suspense } from "react";
import "./AstroForm.css";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Nakshatra = () => {
  const Form = lazy(() => import("../../pages/Form/Form"));

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">Nakshatra Astrology Course</h1>
        </div>

        <p>
          Designed for both beginners and advanced learners, this course
          provides a solid foundation in Nakshatra Jyotish while also exploring
          advanced techniques for in-depth chart interpretation, predictive
          accuracy, and spiritual insight. Students will gain a deep
          understanding of the 27 Nakshatras, their ruling planets, deities, and
          symbolic energies — and how these celestial forces influence
          personality, relationships, career paths, health, and life events.
        </p>

        <p>
          Throughout the program, you’ll learn how to identify key Nakshatra
          placements in a birth chart, interpret planetary interactions within
          them, and apply this knowledge to precise forecasting. The course
          combines in-depth theoretical lessons with practical chart analysis,
          ensuring you not only understand Nakshatra Jyotish intellectually but
          also gain the skill to apply it with confidence in real-life readings.
        </p>

        <p>
          You will also explore how Nakshatra Jyotish complements other branches
          of Vedic Astrology, and how it can be integrated into professional
          astrology consultations or personal self-discovery practices. Whether
          you aim to deepen your spiritual understanding, enhance your
          predictive skills, or begin a career as a Nakshatra Jyotish
          practitioner, this course is designed to meet you where you are and
          guide you to mastery.
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

export default React.memo(Nakshatra);
