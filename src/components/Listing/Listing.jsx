import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../config/api";

const Listing = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");

  const [imageFiles, setImageFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [loading, setLoading] = useState(false);

  // Image Preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImageFiles(files);

    const newPreviews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(newPreviews);
  };

  // Submit Form
  const handleSubmit = async () => {
    if (
      !title ||
      !description ||
      !price ||
      !location ||
      !amenities
    ) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("location", location);
      formData.append("amenities", amenities);

      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      await API.post("/listings/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess("Listing Created Successfully 🎉");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#312e81)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      {/* Main Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "35px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          animation: "fadeIn 1s ease",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "32px",
            marginBottom: "10px",
          }}
        >
          Add Course ✨
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Create your new listing with images 🚀
        </p>

        {/* Error */}
        {error && (
          <div
            style={{
              background: "#ef4444",
              color: "#fff",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
              textAlign: "center",
              animation: "shake 0.4s ease",
            }}
          >
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div
            style={{
              background: "#22c55e",
              color: "#fff",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {success}
          </div>
        )}

        {/* Input Fields */}
        {[
          {
            placeholder: "Course Name",
            value: title,
            setValue: setTitle,
            type: "text",
          },
          {
            placeholder: "Price",
            value: price,
            setValue: setPrice,
            type: "number",
          },
          {
            placeholder: "Enter Description",
            value: description,
            setValue: setDescription,
            type: "text",
          },
          {
            placeholder: "Enter Category",
            value: location,
            setValue: setLocation,
            type: "text",
          },
          {
            placeholder: "Enter Amenities",
            value: amenities,
            setValue: setAmenities,
            type: "text",
          },
        ].map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) =>
              field.setValue(e.target.value)
            }
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
        ))}

        {/* File Upload */}
        <div
          style={{
            marginBottom: "20px",
            background: "rgba(255,255,255,0.08)",
            padding: "15px",
            borderRadius: "12px",
            border: "2px dashed rgba(255,255,255,0.3)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{
              color: "#fff",
            }}
          />

          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#cbd5e1",
            }}
          >
            Upload Multiple Images 📸
          </p>
        </div>

        {/* Image Preview */}
        {previews.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "20px",
              justifyContent: "center",
            }}
          >
            {previews.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`preview-${i}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "2px solid #fff",
                  animation: "zoomIn 0.5s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow:
              "0 4px 15px rgba(99,102,241,0.5)",
          }}
        >
          {loading
            ? "Creating Listing..."
            : "Create Listing"}
        </button>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginTop: "20px",
            fontSize: "13px",
          }}
        >
          Upload & manage your course beautifully 💫
        </p>
      </div>

      {/* Animations */}
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

          @keyframes zoomIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
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

export default Listing;