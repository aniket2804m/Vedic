import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Components
const Home = lazy(() => import("./components/Home/Home"));
const Vedicastro = lazy(() => import("./components/VedicAstro/Vedicastro"));
const Kp = lazy(() => import("./components/Kp/Kp"));
const LalKitab = lazy(() => import("./components/LalKitab/LalKitab"));
const Nakshatra = lazy(() => import("./components/Nakshatra/Nakshatra"));
const Numerology = lazy(() => import("./components/Numerology/Numerology"));

// // Pages
const Feature = lazy(() => import("./pages/Feature/Feature"));
const Course = lazy(() => import("./pages/Course/Course"));
const Board = lazy(() => import("./pages/Board/Board"));
const Choose = lazy(() => import("./pages/Choose/Choose"));
const Review = lazy(() => import("./pages/Review/Review"));
const Form = lazy(() => import("./pages/Form/Form"));
const Certificate = lazy(() => import("./pages/Certificate/Certificate"));
const KpForm = lazy(() => import("./pages/Form/KpForm"));
const KpFeedback = lazy(() => import("./pages/Feedback/KpFeedback"));

function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <Navbar />

       {/* MAIN CONTENT */}
      <main style={{ minHeight: "80vh", overflowX: "hidden" }}>
        <Suspense
    fallback={
      <div className="premium-loader">
        <div className="loader-content">
          <div className="spinner"></div>
          <h2>Loading...</h2>
          <p>Please wait, preparing your experience</p>
        </div>
      </div>
    }
  >
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/course" element={<Course />} />
            <Route path="/board" element={<Board />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/review" element={<Review />} />
            <Route path="/form" element={<Form />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/vedic-astrology" element={<Vedicastro />} />
            <Route path="/kp-astrology" element={<Kp />} />
            <Route path="/lal-kitab" element={<LalKitab />} />
            <Route path="/nakshatra" element={<Nakshatra />} />
            <Route path="/vedic-numerology" element={<Numerology />} />
            <Route path="/kp-form" element={<KpForm />} />
            <Route path="/kp-feedback" element={<KpFeedback />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

    </Router>
  );
}

export default App;