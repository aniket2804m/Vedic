import { useState } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 कैसे मदद कर सकता हूँ?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const botReply = getBotReply(input);

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    // Courses
    if (
      msg.includes("course") ||
      msg.includes("courses") ||
      msg.includes("astrology")
    ) {
      return {
        text: "📚 We provide Academy of Jiivaastro, KP Astrology, Lal Kitab, Numerology, Vastu Shastra and Crystal Healing courses.",
        sender: "bot",
      };
    }

    // Numerology
    if (msg.includes("numerology")) {
      return {
        text: "🔢 Numerology helps understand your life path, destiny number and personality using numbers.",
        sender: "bot",
      };
    }

    // KP Astrology
    if (msg.includes("kp")) {
      return {
        text: "✨ KP Astrology is a scientific astrology method used for accurate future predictions.",
        sender: "bot",
      };
    }

    // Vastu
    if (msg.includes("vastu")) {
      return {
        text: "🏠 Vastu Shastra helps balance positive energy in home and office.",
        sender: "bot",
      };
    }

    // Contact
    if (
      msg.includes("contact") ||
      msg.includes("phone") ||
      msg.includes("call")
    ) {
      return {
        text: "📞 Contact us at +91 - 7057319333 or email Jiivaastroacademy@gmail.com",
        sender: "bot",
      };
    }

    // Fees
    if (msg.includes("fees") || msg.includes("price") || msg.includes("cost")) {
      return {
        text: "💰 Course fees depend on the selected program. Please visit the course page for details.",
        sender: "bot",
      };
    }

    // Website Guide
    if (msg.includes("home")) {
      return {
        text: "🏠 Home page contains all jiivaastro Academy information and featured courses.",
        sender: "bot",
      };
    }

    if (msg.includes("payment")) {
      return {
        text: "💳 Go to the Payment page from Navbar to complete your payment securely.",
        sender: "bot",
      };
    }

    if (msg.includes("career")) {
      return {
        text: "🚀 Career page contains job opportunities and internship details.",
        sender: "bot",
      };
    }

    if (msg.includes("contact us")) {
      return {
        text: "📍 You can find our address, phone number and map location on Contact Us page.",
        sender: "bot",
      };
    }

    // Greeting
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return {
        text: "🙏 Welcome to jiivaastro Academy. How can I help you today?",
        sender: "bot",
      };
    }

    // Default
    return {
      text: "😅 Sorry, I didn't understand. Please ask about courses, astrology, payment, career or contact details.",
      sender: "bot",
    };
  };

  return (
    <>
    
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          background: "#7c3aed",
          color: "#fff",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          zIndex: 1000,
        }}
      >
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          {/* Header */}
          <div
            style={{
              background: "#7c3aed",
              color: "#fff",
              padding: "10px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Chat Support</span>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.sender === "user" ? "right" : "left",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    background: m.sender === "user" ? "#7c3aed" : "#f1f5f9",
                    color: m.sender === "user" ? "#fff" : "#000",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    display: "inline-block",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
              style={{
                flex: 1,
                padding: "8px",
                border: "none",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#7c3aed",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
