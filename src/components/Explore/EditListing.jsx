import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../config/api";
import "./EditListing.css";

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editData, setEditData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    amenities: "",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const fetchListing = useCallback(async () => {
  try {
    const res = await API.get(`/listings/${id}`);
    const listing = res.data.listing || res.data;

    setEditData({
      title: listing.title || "",
      description: listing.description || "",
      price: listing.price || "",
      location: listing.location || "",
      amenities: listing.amenities || "",
    });

    setPreviews(listing.images?.map((img) => img.url) || []);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
}, [id]);

  useEffect(() => {
  fetchListing();
}, [fetchListing]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImageFiles(files);

    setPreviews(
      files.map((file) => URL.createObjectURL(file))
    );
  };

  const handleUpdate = async () => {
    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      Object.keys(editData).forEach((key) => {
        formData.append(key, editData[key]);
      });

      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      await API.put(`/listings/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Listing Updated Successfully");
      navigate("/explore");
    } catch (err) {
      console.log(err);
      alert("Failed To Update Listing");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-loader">
        <div className="spinner"></div>
        <h3>Loading Course...</h3>
      </div>
    );
  }

  return (
    <div className="edit-page">
      <div className="edit-card">
        <h1>Edit Course</h1>
        <p>Update your course details and images</p>

        <div className="form-group">
          <label>Title</label>
          <input
            value={editData.title}
            onChange={(e) =>
              setEditData({
                ...editData,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            value={editData.description}
            onChange={(e) =>
              setEditData({
                ...editData,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={editData.price}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  price: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              value={editData.location}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  location: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Amenities</label>
          <input
            value={editData.amenities}
            onChange={(e) =>
              setEditData({
                ...editData,
                amenities: e.target.value,
              })
            }
          />
        </div>

        <div className="upload-box">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {previews.length > 0 && (
          <div className="preview-grid">
            {previews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="preview"
              />
            ))}
          </div>
        )}

        <div className="button-group">
          <button
            className="update-btn"
            onClick={handleUpdate}
            disabled={saving}
          >
            {saving ? "Updating..." : "Update Course"}
          </button>

          <button
            className="cancel-btn"
            onClick={() => navigate("/explore")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditListing;