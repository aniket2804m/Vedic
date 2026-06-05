import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
const Weekly = lazy(() => import("./components/Weekly/Weekly"));
const Numero = lazy(() => import("./components/Numero/Numero"));
const NameNumerology = lazy(
  () => import("./components/NameNumerology/NameNumerology"),
);
const Press = lazy(() => import("./components/Press/Press"));

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
const Top = lazy(() => import("./components/Top"));
const ScrollTop = lazy(() => import("./components/ScrollTop"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Term = lazy(() => import("./components/Term"));

const ChatBot = lazy(() => import("./components/ChatBot"));
const Careers = lazy(() => import("./components/Careers"));

const CheckoutPage = lazy(() => import("./components/CheckoutPage"));

const AuthPage = lazy(() => import("./components/Auth/Login"));

const Register = lazy(() => import("./components/Auth/Register"));

const Listing = lazy(() => import("./components/Listing/Listing"));

const Explore = lazy(() => import("./components/Explore/Explorelisting"));

const EditListing = lazy(() => import("./components/Explore/EditListing"));

const DeleteListing = lazy(() => import("./components/Explore/DeleteListing"));

const Gallary = lazy(() => import("./components/Gallary/Gallary"));

const AdminRoute = lazy(() => import("./components/Protected/AdminRoutes"));

const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));

const AdminCourse = lazy(() => import("./pages/admin/AdminCourse"));

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Navbar />

      <Top />

      <ScrollTop />

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
            <Route path="/Weekly" element={<Weekly />} />
            <Route path="/Numero" element={<Numero />} />
            <Route path="/name-numerology" element={<NameNumerology />} />
            <Route path="/press" element={<Press />} />
            <Route path="/top" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Term />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/payment" element={<CheckoutPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<Register />} />

            {/* <Route path="/listing" element={ <AdminRoute><Listing /></AdminRoute> } />
            <Route path="/dashboard" element={ <AdminRoute><AdminDashboard /></AdminRoute> } />
            <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}></Route>
            <Route path="/admin/courses" element={<AdminRoute><AdminCourse /></AdminRoute>}></Route> */}

            <Route path="/listing" element={ <AdminRoute><Listing /></AdminRoute> } />

            {/* <Route path="/dashboard" element={ <AdminRoute><AdminDashboard /></AdminRoute> } /> */}
            

            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="/admin/courses" element={<AdminCourse />} />
              {/* <Route path="users" element={<ManageUsers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="quiz-report" element={<QuizReport />} /> */}
            </Route>

            <Route path="/explore" element={<Explore />} />
            <Route path="/edit-listing" element={<EditListing />} />
            <Route path="/delete-listing" element={<DeleteListing />} />
            <Route path="/gallery" element={<Gallary />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <ChatBot />
    </Router>
  );
}

export default App;
