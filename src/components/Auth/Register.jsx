import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../config/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    error: "",
    success: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage({
      error: "",
      success: "",
    });
  };

  // Register Function
  const userRegister = async () => {
    const { name, email, password } = formData;

    // Validation
    if (!name || !email || !password) {
      return setMessage({
        error: "Please fill all fields",
        success: "",
      });
    }

    if (password.length < 6) {
      return setMessage({
        error: "Password must be at least 6 characters",
        success: "",
      });
    }

    try {
      setLoading(true);

     await API.post("/auth/register", {
  name,
  email,
  password,
});

      setMessage({
        success: "User registered successfully 🎉",
        error: "",
      });

      // Redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setMessage({
        error:
          err.response?.data?.message || "Something went wrong",
        success: "",
      });
    } finally {
      setLoading(false);
    }
  };

  // Enter Key Support
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      userRegister();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* Register Card */}
      <div
        style={{
          width: "400px",
          padding: "35px",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          animation: "fadeIn 1s ease",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Create Account ✨
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Join us and start your journey 🚀
        </p>

        {/* Error */}
        {message.error && (
          <div
            style={{
              background: "#ff4d4f",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "15px",
              textAlign: "center",
              animation: "shake 0.4s ease",
            }}
          >
            {message.error}
          </div>
        )}

        {/* Success */}
        {message.success && (
          <div
            style={{
              background: "#22c55e",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {message.success}
          </div>
        )}

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            fontSize: "15px",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            fontSize: "15px",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />

        {/* Password */}
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "18px",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              fontSize: "15px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              boxSizing: "border-box",
            }}
          />

          {/* Show Password */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "15px",
              top: "15px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Register Button */}
        <button
          onClick={userRegister}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, #06b6d4, #3b82f6)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            transform: loading ? "scale(0.98)" : "scale(1)",
            boxShadow: "0 4px 15px rgba(59,130,246,0.5)",
          }}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        {/* Bottom Text */}
        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          Secure Registration System 🔐
        </p>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          input::placeholder {
            color: #cbd5e1;
          }

          input:focus {
            box-shadow: 0 0 10px #38bdf8;
          }

          button:hover {
            transform: translateY(-2px);
            opacity: 0.95;
          }
        `}
      </style>
    </div>
  );
};

export default Register;