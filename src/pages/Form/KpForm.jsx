import React from "react";
import { lazy, Suspense } from "react";
import "./AstroForm.css";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const KpForm = () => {

  const Form = lazy(() => import("../../pages/Form/Form"));

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">KP Astrology Course</h1>
        </div>
        <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
          Become a Professional Kp Astrologer
        </h3>

        <p>
          Our KP Astrology course offers a comprehensive and practical approach
          to understanding and mastering the Krishnamurti Paddhati (KP) of
          astrology. Designed for both beginners and advanced learners, the
          course covers the fundamentals of KP Astrology, including its unique
          house system, cuspal interlinks, and ruling planets. Through a
          combination of theoretical lessons and practical applications,
          students will learn to make precise predictions and gain deep insights
          into various aspects of life.
        </p>

        <p>
          Join us to unlock the secrets of the stars and enhance your
          astrological skills with expert guidance and hands-on experience. With
          a focus on accuracy, simplicity, and structured learning, this program
          empowers students to confidently interpret charts and deliver reliable
          predictions. Whether you aim to pursue astrology professionally or
          deepen your personal understanding, this training provides the right
          balance of theory and practice. It stands out as the best KP astrology
          course in india for learners who are serious about mastering KP
          Astrology with clarity and precision.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Form />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default React.memo(KpForm);
