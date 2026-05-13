import React from 'react'
import { lazy, Suspense } from "react";
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import img from "../../assets/vedic.png";
import "./Nakshatra.css";

const Feature = lazy(() => import('../../pages/Feature/Feature'));
const NakshatraAbout = lazy(() => import("../../pages/About/NakshatraAbout"));
const NakshatraForm = lazy(() => import("../../pages/Form/Nakshatra"));
const Board = lazy(() => import("../../pages/Board/Board"));
const AstroAdmission = lazy(() => import("../../pages/Admission/AstroAdmission"));
const NakshatraFeedback = lazy(() => import("../../pages/Feedback/NakshatraFeedback"));
const NakshatraCurricu = lazy(() => import("../../pages/Curriculum/NakshatraCurricu"));
const NakshatraReview = lazy(() => import("../../pages/Review/NakshatraReview"));
const AstroCertificate = lazy(() => import("../../pages/Certificate/AstroCerticicate"));
const FAQ = lazy(() => import("../../pages/Faq/AstroFaq"));

const Nakshatra = () => {
  return (
    <div className='home-container'>
      
       <section className="home">
              {/* LEFT */}
              <div className="home-left">
                <h1>
                  Best <span> Nakshatra Astrology</span> Course
                </h1>
      
                <p>
                 Learn the ancient science of Nakshatras to understand personality, karma, and destiny with step-by-step guided training and certification.
                </p>
      
                
                 <p> Trusted by 1 Lakh+ Students Globally ↗ </p>

                <button className="home-btn">
                     Get Course Details ↗
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
                      <NakshatraAbout />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <NakshatraForm />
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
                      <NakshatraFeedback />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <NakshatraCurricu />
                    </Suspense>
                  </ErrorBoundary>


             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <NakshatraReview />
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

export default Nakshatra
