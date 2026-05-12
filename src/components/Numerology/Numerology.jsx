import React from 'react'
import { lazy, Suspense } from "react";
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import img from "../../assets/vedic.png";
import "./Numerology.css";

const Feature = lazy(() => import('../../pages/Feature/Feature'));
const NumerologyAbout = lazy(() => import("../../pages/About/NumerologyAbout"));
const LalForm = lazy(() => import("../../pages/Form/LalForm"));
const Board = lazy(() => import("../../pages/Board/Board"));
const AstroAdmission = lazy(() => import("../../pages/Admission/AstroAdmission"));
const LalFeedback = lazy(() => import("../../pages/Feedback/LalFeedback"));
const LalCurricu = lazy(() => import("../../pages/Curriculum/LalCurricu"));
const LalReview = lazy(() => import("../../pages/Review/LalReview"));
const AstroCertificate = lazy(() => import("../../pages/Certificate/AstroCerticicate"));
const FAQ = lazy(() => import("../../pages/Faq/AstroFaq"));

const Numerology = () => {
  return (
    <div className='home-container'>
      
       <section className="home">
              {/* LEFT */}
              <div className="home-left">
                <h1>
                 <span>Jiivaastro Numerology Course</span> WithCertification
                </h1>
      
                <p>
               Join our online Vedic numerology course and learn how the numbers can impact your life and growth.
                </p>
      
                
                 <p> Trusted by 1 Lakh+ Students Globally ↗ </p>
               
      
                <div className="students">
                  <p className="badge">Over 1 Lakh Satisfied Learners Globally</p>

                   <button className="home-btn">
                     Get Course Details ↗
                </button>
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
                      <NumerologyAbout />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <LalForm />
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
                      <LalFeedback />
                    </Suspense>
                  </ErrorBoundary>

             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <LalCurricu />
                    </Suspense>
                  </ErrorBoundary>


             <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <LalReview />
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

export default Numerology
