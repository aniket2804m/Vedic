import React from "react";
import { lazy, Suspense } from "react";

import "./Home.css";
import img from "../../assets/vedic.png";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Course = lazy(() => import("../../pages/Course/Course"));
const Feature = lazy(() => import("../../pages/Feature/Feature"));
const Board = lazy(() => import("../../pages/Board/Board"));
const Choose = lazy(() => import("../../pages/Choose/Choose"));
const Review = lazy(() => import("../../pages/Review/Review"));
const Form = lazy(() => import("../../pages/Form/Form"));
const Certificate = lazy(() => import("../../pages/Certificate/Certificate"));
const Student = lazy(() => import("../../pages/Student/Students"));
const FAQ = lazy(() => import("../../pages/Faq/AstroFaq"));
const Happy = lazy(() => import("../../pages/Happy/Happy"));

const Home = () => {

  return (
    <div className="home-container">
      <section className="home">
        {/* LEFT */}
        <div className="home-left">
          <h1>
            India's No.1 Academy For <br />
            <span>Jiivaastro & Occult Science Courses</span>
          </h1>

          <p>
            We offer In-demand Jiivaastro and occult science courses for all with
            globally recognized certificate
          </p>

          <button className="home-btn">Explore Courses ↗</button>

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
        <Feature />
         </Suspense>
      </ErrorBoundary>

       <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Course />
         </Suspense>
      </ErrorBoundary>

        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Board />
         </Suspense>
      </ErrorBoundary>

        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Choose />
         </Suspense>
      </ErrorBoundary>
        
        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Review />
         </Suspense>
      </ErrorBoundary>

        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Form />
         </Suspense>
      </ErrorBoundary>
        
        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Certificate />
         </Suspense>
      </ErrorBoundary>
 
        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Student />
         </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Happy />
         </Suspense>
      </ErrorBoundary>

        <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <FAQ />
         </Suspense>
      </ErrorBoundary>

      
    </div>
  );
};

export default Home;
