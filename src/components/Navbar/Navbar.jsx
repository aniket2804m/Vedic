import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/vedic.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // ✅ FIX

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  // Account Dropdown

  const [accountDropdown, setAccountDropdown] = useState(false);
  const token = localStorage.getItem("token");

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setMenuOpen(false);
    setDropdown(null);
    setAccountDropdown(false);

    navigate("/");
  };

  // Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ FIXED TOGGLE FUNCTION
  const toggleDropdown = (name) => {
    setDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        {/* COURSES */}
        <li
          className="dropdown-parent"
          onMouseEnter={() => window.innerWidth > 768 && setDropdown("courses")}
        >
          <div
            className="nav-title"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("courses"); // ✅ FIX
            }}
          >
            Courses {dropdown === "courses" ? "▲" : "▼"}
          </div>

          <div
            className={`mega-dropdown ${dropdown === "courses" ? "show" : ""}`} // ✅ FIX
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mega-grid">
              <Link
                to="/vedic-astrology"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Jiivaastro Astrology
              </Link>
              <Link
                to="/kp-astrology"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                KP Astrology
              </Link>
              <Link
                to="/lal-kitab"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Lal Kitab
              </Link>
              <Link
                to="/nakshatra"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Nakshatra Astrology
              </Link>
              <Link
                to="/vedic-numerology"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Jiivaastro Numerology
              </Link>
              <Link
                to="/lo-shu"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Lo Shu Numerology
              </Link>
              <Link
                to="/vastu"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Vastu Shastra
              </Link>
              <Link
                to="/crystal"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Crystal Healing
              </Link>
            </div>
          </div>
        </li>

        {/* IMPORTANT LINKS */}
        <li
          className="dropdown-parent"
          onMouseEnter={() => window.innerWidth > 768 && setDropdown("links")}
        >
          <div className="nav-title" onClick={() => toggleDropdown("links")}>
            Important Links {dropdown === "links" ? "▲" : "▼"}
          </div>

          <div
            className={`mega-dropdown ${dropdown === "links" ? "show" : ""}`}
          >
            <div className="mega-grid">
              <Link
                to="/Weekly"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Weekly Horoscope
              </Link>
              <Link
                to="/Numero"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Name Numerology Calculator
              </Link>
              <Link
                to="/name-numerology"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Numerology Calculator
              </Link>
              <Link
                to="#"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Blog
              </Link>
              <Link
                to="press"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Press Release
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Contact Us
              </Link>
              <Link
                to="#"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                About Us
              </Link>
            </div>
          </div>
        </li>

        {/* PROGRAM */}
        <li
          className="dropdown-parent"
          onMouseEnter={() => window.innerWidth > 768 && setDropdown("program")}
        >
          <div className="nav-title" onClick={() => toggleDropdown("program")}>
            Special Program {dropdown === "program" ? "▲" : "▼"}
          </div>

          <div
            className={`mega-dropdown ${dropdown === "program" ? "show" : ""}`}
          >
            <div className="mega-grid">
              <Link
                to="#"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Jiivaastro Mastery Retainer
              </Link>
              <Link
                to="#"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdown(null);
                }}
              >
                Vedic Practitioner Residency
              </Link>
            </div>
          </div>
        </li>


        <li>
          <Link
            to="/career"
            onClick={() => {
              setMenuOpen(false);
              setDropdown(null);
            }}
          >
            Career
          </Link>
        </li>

        <li>
          <Link
            to="/gallery"
            onClick={() => {
              setMenuOpen(false);
              setDropdown(null);
            }}
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            to="/explore"
            onClick={() => {
              setMenuOpen(false);
              setDropdown(null);
            }}
          >
            Explore Courses
          </Link>
        </li>

        {role === "admin" && (
          <li>
            <Link
              to="/admin/dashboard"
              onClick={() => {
                setMenuOpen(false);
                setDropdown(null);
              }}
            >
              ✦Dashboard
            </Link>
          </li>
        )}

        {role === "admin" && (
          <li>
            <Link
              to="/listing"
              onClick={() => {
                setMenuOpen(false);
                setDropdown(null);
              }}
            >
              Add Course
            </Link>
          </li>
        )}

        <li style={{ position: "relative" }}>
          <button
            className="register1"
            onClick={() => setAccountDropdown(!accountDropdown)}
          >
            Account ▼
          </button>

          {accountDropdown && (
            <ul className="account-dropdown">
              {!token ? (
                <>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/register");
                        setAccountDropdown(false);
                        setMenuOpen(false);
                        setDropdown(null);
                      }}
                    >
                      Register
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setAccountDropdown(false);
                        setMenuOpen(false);
                        setDropdown(null);
                      }}
                    >
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                      setDropdown(null);
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;