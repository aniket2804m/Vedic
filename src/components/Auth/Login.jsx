import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../config/api";

const Login = ({ setRole }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  // Login Function
  const userLogin = async () => {
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      return setMessage({
        error: "Please fill all fields",
        success: "",
      });
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      const { token, role, user, message } = response.data;

      // Store Data
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(user));

      // setRole(role);

      if (setRole) {
  setRole(role);
}

      setMessage({
        success: message || "Login Successful",
        error: "",
      });

      // Redirect
      // setTimeout(() => {
      //   navigate(role === "admin" ? "/admin" : "/dashboard");
      // }, 1500);

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
  console.log("FULL ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("DATA:", err.response?.data);

  setMessage({
    error: err.response?.data?.message || "Something went wrong",
    success: "",
  });
}
  };

  // Enter Key Support
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      userLogin();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* Glassmorphism Card */}
      <div
        style={{
          width: "380px",
          padding: "35px",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          animation: "fadeIn 1s ease",
          position: "relative",
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
          Welcome Back 👋
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Login to continue your journey
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
            transition: "0.3s",
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

        {/* Login Button */}
        <button
          onClick={userLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            transform: loading ? "scale(0.98)" : "scale(1)",
            boxShadow: "0 4px 15px rgba(99,102,241,0.5)",
          }}
        >
          {loading ? "Logging in..." : "Login"}
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
          Secure Login System 🔒
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
            box-shadow: 0 0 10px #818cf8;
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

export default Login;
