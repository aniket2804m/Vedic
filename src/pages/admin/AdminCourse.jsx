import { useState, useEffect, useCallback, useMemo } from "react";
import API from "../../config/api";
import "./ManageCourses.css";

const ADMIN_API = "/admin";

const emptyForm = {
  title: "",
  description: "",
  price: "",
  category: "",
  thumbnail: "",
  instructor: "",
};

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const headers = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
    }),
    [token]
  );

  const fetchCourses = useCallback(async () => {
    try {
      const res = await API.get(`${ADMIN_API}/courses`, { headers });
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [headers]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleSubmit = async () => {
    if (!form.title || !form.price) {
      return alert("Title and Price required!");
    }

    setLoading(true);

    try {
      if (editId) {
        await API.put(`${ADMIN_API}/courses/${editId}`, form, {
          headers,
        });
      } else {
        await API.post(`${ADMIN_API}/courses`, form, {
          headers,
        });
      }

      setForm(emptyForm);
      setEditId(null);
      setShowForm(false);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleEdit = (course) => {
    setForm({
      title: course.title,
      description: course.description,
      price: course.price,
      category: course.category,
      thumbnail: course.thumbnail,
      instructor: course.instructor,
    });

    setEditId(course._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await API.delete(`${ADMIN_API}/courses/${id}`, {
        headers,
      });

      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = courses.filter((course) =>
    course.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-container">
      {/* Header */}
      <div className="courses-header">
        <div>
          <h2>📚 Manage Courses</h2>
          <p>{courses.length} Total Courses</p>
        </div>

        <button
          className="add-btn"
          onClick={() => {
            setShowForm(!showForm);
            setEditId(null);
            setForm(emptyForm);
          }}
        >
          {showForm ? "✖ Cancel" : "+ Add Course"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="course-form-card">
          <h3>{editId ? "Update Course" : "Create New Course"}</h3>

          <div className="form-grid">
            <div>
              <label>Course Title</label>
              <input
                value={form.title}
                placeholder="React Mastery"
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            <div>
              <label>Instructor</label>
              <input
                value={form.instructor}
                placeholder="John Doe"
                onChange={(e) =>
                  setForm({
                    ...form,
                    instructor: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Price</label>
              <input
                value={form.price}
                placeholder="999"
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            </div>

            <div>
              <label>Category</label>
              <input
                value={form.category}
                placeholder="Web Development"
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              />
            </div>

            <div className="full-width">
              <label>Thumbnail URL</label>
              <input
                value={form.thumbnail}
                placeholder="https://image-url.com"
                onChange={(e) =>
                  setForm({
                    ...form,
                    thumbnail: e.target.value,
                  })
                }
              />
            </div>

            <div className="full-width">
              <label>Description</label>
              <textarea
                rows="4"
                value={form.description}
                placeholder="Course Description..."
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button
            className="submit-btn"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading
              ? "Saving..."
              : editId
              ? "Update Course"
              : "Create Course"}
          </button>
        </div>
      )}

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Category</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-row">
                    No Courses Found
                  </td>
                </tr>
              ) : (
                filtered.map((course) => (
                  <tr key={course._id}>
                    <td>
                      <div className="course-title">
                        {course.title}
                      </div>

                      <div className="course-desc">
                        {course.description?.slice(0, 60)}...
                      </div>
                    </td>

                    <td>
                      <span className="badge">
                        {course.category || "General"}
                      </span>
                    </td>

                    <td>
                      {course.instructor || "N/A"}
                    </td>

                    <td className="price">
                      ₹{course.price}
                    </td>

                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() =>
                            handleEdit(course)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(course._id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}