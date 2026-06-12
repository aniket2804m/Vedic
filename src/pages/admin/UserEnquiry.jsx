import React, { useState, useEffect } from "react";
import API from "../../config/api";
import { FaTrashAlt, FaUserGraduate } from "react-icons/fa";
import "./UserEnquiry.css";

const ADMIN_API = "/admin";

const UserEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await API.get(`${ADMIN_API}/enquiries`);
        setEnquiries(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`${ADMIN_API}/enquiries/${id}`);

      setEnquiries((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Enquiry deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete enquiry");
    }
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-header">
        <div>
          <h2>Course Enquiries</h2>
          <p>Manage all student enquiries</p>
        </div>

        <div className="total-card">
          <FaUserGraduate />
          <span>{enquiries.length}</span>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="enquiry-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>City</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(enquiries) &&
              enquiries.map((item) => (
                <tr key={item._id}>
                  <td>
                    <strong>
                      {item.firstName} {item.lastName}
                    </strong>
                  </td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>
                    <span className="course-badge">
                      {item.course}
                    </span>
                  </td>

                  <td>{item.city}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {enquiries.length === 0 && (
          <div className="empty-state">
            No enquiries found
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEnquiry;