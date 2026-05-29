import React from 'react'
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import img from "../../assets/vedic.png";
import "./Kp.css";

const Feature = lazy(() => import('../../pages/Feature/Feature'));
const KpAbout = lazy(() => import("../../pages/About/KpAbout"));
const KpForm = lazy(() => import("../../pages/Form/KpForm"));
const Board = lazy(() => import("../../pages/Board/Board"));
const AstroAdmission = lazy(() => import("../../pages/Admission/AstroAdmission"));
const KpFeedback = lazy(() => import("../../pages/Feedback/KpFeedback"));
const KpCurricu = lazy(() => import("../../pages/Curriculum/KpCurricu"));
const KpReview = lazy(() => import("../../pages/Review/KpReview"));
const AstroCertificate = lazy(() => import("../../pages/Certificate/AstroCerticicate"));
const FAQ = lazy(() => import("../../pages/Faq/Kp"));

const Kp = () => {

  const navigate = useNavigate();

  return (
    <div className='home-container'>
      
       <section className="home">
              {/* LEFT */}
              <div className="home-left">
                <h1>
                  Best <span>KP Astrology Course</span>
                </h1>
      
                <p>
                  Discover how KP Astrology reveals exact timing of events with unmatched accuracy and deep insights.
                </p>
      
                <button className="home-btn">
                  Trusted by 1 Lakh+ Students Globally ↗
                </button>

                <button className="home-btn" onClick={() => navigate("/explore")}>
            Explore Courses ↗
          </button>
      
                <div className="students">
                  <p className="badge">Over 1 Lakh Satisfied Learners Globally</p>
      
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
                      <KpAbout />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <KpForm />
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
                      <KpFeedback />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <KpCurricu />
                    </Suspense>
                  </ErrorBoundary>


             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <KpReview />
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
  )
}

export default Kp
