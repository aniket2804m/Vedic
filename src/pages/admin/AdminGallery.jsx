import { useState, useEffect } from "react";
import API from "../../config/api";

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("media", file);

    try {
      setLoading(true);

      await API.post("/gallery/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded Successfully ✅");
      setFile(null);
      fetchGallery();
    } catch (error) {
      console.log(error);
      alert("Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // fetch gallery items
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");
      setGalleryItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete images
  const deleteMedia = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this media?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/gallery/${id}`);

      setGalleryItems((prev) => prev.filter((item) => item._id !== id));

      alert("Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
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
        background: "linear-gradient(135deg,#f8fafc,#e2e8f0)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
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
            onChange={(e) => setFile(e.target.files[0])}
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
            cursor: loading ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          {loading ? "Uploading..." : "🚀 Upload Media"}
        </button>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              color: "#0f172a",
            }}
          >
            Gallery Items
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            {galleryItems.map((item) => (
              <div
                key={item._id}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  marginBottom: "30px",
                }}
              >
                {item.mediaType === "image" ? (
                  <img
                    src={item.mediaUrl}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <video
                    controls
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  >
                    <source src={item.mediaUrl} type="video/mp4" />
                  </video>
                )}

                <div
                  style={{
                    padding: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    {item.mediaType}
                  </span>

                  <button
                    onClick={() => deleteMedia(item._id)}
                    style={{
                      padding: "8px 14px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#fee2e2",
                      color: "#dc2626",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
