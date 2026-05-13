import React from 'react'
import { lazy, Suspense } from "react";
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import img from "../../assets/vedic.png";
import "./LalKitab.css";

const Feature = lazy(() => import('../../pages/Feature/Feature'));
const LalAbout = lazy(() => import("../../pages/About/LalAbout"));
const LalForm = lazy(() => import("../../pages/Form/LalForm"));
const Board = lazy(() => import("../../pages/Board/Board"));
const AstroAdmission = lazy(() => import("../../pages/Admission/AstroAdmission"));
const LalFeedback = lazy(() => import("../../pages/Feedback/LalFeedback"));
const LalCurricu = lazy(() => import("../../pages/Curriculum/LalCurricu"));
const LalReview = lazy(() => import("../../pages/Review/LalReview"));
const AstroCertificate = lazy(() => import("../../pages/Certificate/AstroCerticicate"));
const FAQ = lazy(() => import("../../pages/Faq/AstroFaq"));

const LalKitab = () => {
  return (
    <div className='home-container'>
      
       <section className="home">
              {/* LEFT */}
              <div className="home-left">
                <h1>
                  Best <span>Lal Kitab Course</span>
                </h1>
      
                <p>
                 Learn powerful planetary remedies from Lal Kitab to heal challenges and attract abundance into life.
                </p>
      
                
                 <p> Trusted by 1 Lakh+ Students Globally ↗ </p>
               
               <button className="home-btn">Explore Courses ↗</button>
      
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
                      <LalAbout />
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

export default LalKitab
