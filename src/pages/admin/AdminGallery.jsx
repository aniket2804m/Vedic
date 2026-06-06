import { useState } from "react";
import API from "../../config/api";

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("media", file);

    try {
      setLoading(true);

      await API.post(
        "/gallery/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Uploaded Successfully ✅");
      setFile(null);
    } catch (error) {
      console.log(error);
      alert("Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background:
          "linear-gradient(135deg,#f8fafc,#e2e8f0)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 15px 35px rgba(0,0,0,0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#0f172a",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Gallery Upload
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Upload photos and videos for your gallery
        </p>

        <div
          style={{
            border: "2px dashed #cbd5e1",
            borderRadius: "16px",
            padding: "30px",
            textAlign: "center",
            background: "#f8fafc",
          }}
        >
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            style={{
              width: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />

          {file && (
            <div
              style={{
                marginTop: "15px",
                padding: "12px",
                borderRadius: "10px",
                background: "#ecfeff",
                color: "#0f172a",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              📁 {file.name}
            </div>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background: loading
              ? "#94a3b8"
              : "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "700",
            cursor: loading
              ? "not-allowed"
              : "pointer",
            transition: "0.3s",
          }}
        >
          {loading
            ? "Uploading..."
            : "🚀 Upload Media"}
        </button>
      </div>
    </div>
  );
}