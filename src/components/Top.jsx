import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const phoneNumber = "7400344849";

  // ✅ responsive fix
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ send message fix
  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* 🔥 FLOATING BUTTON */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: isMobile ? "50px" : "60px",
          height: isMobile ? "50px" : "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: isMobile ? "22px" : "28px",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          zIndex: 1000,

          // 🔥 BLINK ANIMATION
          animation: "blink 1.5s infinite"
        }}
      >
        <FaWhatsapp />
      </div>

      {/* 🔥 CHAT BOX */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? "80px" : "90px",
            right: "20px",
            width: isMobile ? "90%" : "320px",
            maxWidth: "95%",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          {/* HEADER */}
          <div
            style={{
              backgroundColor: "#25D366",
              color: "#fff",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Chat with us on WhatsApp
          </div>

          {/* BODY */}
          <div style={{ padding: "10px" }}>
            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                height: "80px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                resize: "none",
                fontSize: "14px",
                marginBottom: "10px"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                width: "100%",
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600"
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      )}

      {/* 🔥 BLINK KEYFRAMES */}
      <style>
        {`
          @keyframes blink {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppWidget;