import React, { lazy, Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

import img from "../../assets/vedic.png";

const Feature = lazy(() => import("../../pages/Feature/Feature"));
const Board = lazy(() => import("../../pages/Board/Board"));
const Review = lazy(() => import("../../pages/Review/Review"));
const AstroAbout = lazy(() => import("../../pages/About/AstroAbout"));
const AstroForm = lazy(() => import("../../pages/Form/AstroForm"));
const AstroAdmission = lazy(
  () => import("../../pages/Admission/AstroAdmission"),
);
const AstroFeedback = lazy(() => import("../../pages/Feedback/AstroFeedback"));
const AstroReview = lazy(() => import("../../pages/Review/AstroReview"));
const AstroCurricu = lazy(() => import("../../pages/Curriculum/AstroCurricu"));
const AstroCertificate = lazy(
  () => import("../../pages/Certificate/AstroCerticicate"),
);
const FAQ = lazy(() => import("../../pages/Faq/AstroFaq"));

const Vedicastro = () => {

  return (
    <div className="home-container">
      <section className="home">
        {/* LEFT */}
        <div className="home-left">
          <h1>
            Vedic Astrology Course <br />
            <span>Online </span>
          </h1>

          <p>
            Learn birth chart reading, planetary transits, predictions,
            remedies, and much more in depth with our online Vedic Astrology
            course.
          </p>

          <button className="home-btn">
            Trusted by 1 Lakh+ Students Globally ↗
          </button>

          <div className="students">
            <p className="badge">Over 1 Lakh Satisfied Learners Globally</p>

            <div className="avatars">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <div className="count">1 Lakh+</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <img src={img} alt="vedic guru" />
        </div>
      </section>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Feature />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroAbout />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroForm />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Board />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroAdmission />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroFeedback />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroReview />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroCurricu />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Review />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AstroCertificate />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <FAQ />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Vedicastro;
