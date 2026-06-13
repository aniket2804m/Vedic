import React from "react";
// import { useState } from "react";
import "./Form.css";
import img from "../../assets/map.png";
import "react-phone-input-2/lib/style.css";
// import "./AstroForm.css";
import { lazy, Suspense } from "react";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Form = () => {

  const Form = lazy(() => import("../../pages/Form/Forms"));

  return (
    <div className="form-container">
      {/* LEFT SIDE */}
      <div className="left-content">
        <h1>
          Take Your Next Step Towards <span>Jiivaastro</span>
        </h1>

        <img src={img} alt="vedic" />
      </div>

     <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading...</div>}>
        <Form />
         </Suspense>
      </ErrorBoundary>
       
    </div>
  );
};

export default React.memo(Form);
