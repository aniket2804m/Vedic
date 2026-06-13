import React from "react";
import "react-phone-input-2/lib/style.css";
import "./AstroForm.css";
import { lazy, Suspense } from "react";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const AstroForm = () => {

  const Form = lazy(() => import("../../pages/Form/Forms"));

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="heading1">
          <h1>Most Trusted</h1>
          <h1 className="color-head">Jiivaastro Course</h1>
        </div>
        <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
          Become a Professional Astrologer
        </h3>

        <p>
          Are you interested in knowing how the stars, planets and other cosmic
          things influence our lives? Our Course presents you the opportunity to
          learn about the ancient art of Astrology, providing you with the
          knowledge and tools to understand cosmic elements like a pro.
        </p>

        <p>
          Our Jiivaastro astrology course helps you understand everything about
          Astrology, from basics to advanced. If you are serious about learning
          astrology in its true and practical form, the right guidance and
          structured learning matter the most. This program is built for those
          who seek clarity, depth, and authentic Vedic knowledge beyond
          surface-level concepts.
        </p>

        <p>
          Through systematic lessons, real chart practice, and expert-led
          sessions, learners gain the confidence to understand astrology as a
          complete science. The addition of concepts from our Jiivaastro
          numerology course further strengthens your ability to interpret
          patterns and make accurate predictions. For anyone committed to
          mastering astrology, this vedic astrology course is just for you.
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

export default React.memo(AstroForm);
