import { useState, useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
import API from "../../config/api";
import "./ManageUsers.css";

const ADMIN_API = "/admin";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const token = localStorage.getItem("token");

  const headers = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
    }),
    [token]
  );

  const fetchUsers = useCallback(async () => {
    try {
      const res = await API.get(`${ADMIN_API}/users`, { headers });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [headers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleBlock = async (id, isBlocked) => {
    try {
      await API.put(
        `${ADMIN_API}/users/${id}/block`,
        { blocked: !isBlocked },
        { headers }
      );

      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      filterRole === "all" || u.role === filterRole;

    return matchSearch && matchRole;
  });

  return (
    <div className="manage-users">
      <div className="page-header">
        <h2>Manage Users</h2>
        <p>{users.length} Registered Users</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div
            className="stat-number"
            style={{ color: "#3b82f6" }}
          >
            {users.length}
          </div>
          <div className="stat-label">Total Users</div>
        </div>

        <div className="stat-card">
          <div
            className="stat-number"
            style={{ color: "#10b981" }}
          >
            {users.filter((u) => !u.blocked).length}
          </div>
          <div className="stat-label">Active Users</div>
        </div>

        <div className="stat-card">
          <div
            className="stat-number"
            style={{ color: "#ef4444" }}
          >
            {users.filter((u) => u.blocked).length}
          </div>
          <div className="stat-label">Blocked Users</div>
        </div>

        <div className="stat-card">
          <div
            className="stat-number"
            style={{ color: "#8b5cf6" }}
          >
            {users.filter((u) => u.role === "admin").length}
          </div>
          <div className="stat-label">Admins</div>
        </div>
      </div>

      <div className="filter-bar">
        <input
          className="search-box"
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="role-select"
          value={filterRole}
          onChange={(e) =>
            setFilterRole(e.target.value)
          }
        >
          <option value="all">All Roles</option>
          <option value="user">Users</option>
          <option value="admin">Admins</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Courses</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user) => (
              <tr
                className="user-row"
                key={user._id}
              >
                <td>
                  <div className="user-info">
                    <div className="avatar">
                      {user.name?.charAt(0)}
                    </div>

                    <div className="user-name">
                      {user.name}
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`badge ${user.role}`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  {user.enrolledCourses?.length || 0}
                </td>

                <td>
                  <span
                    className={`badge ${
                      user.blocked
                        ? "blocked"
                        : "active"
                    }`}
                  >
                    {user.blocked
                      ? "Blocked"
                      : "Active"}
                  </span>
                </td>

                <td>
                  <button
                    className={`action-btn ${
                      user.blocked
                        ? "unblock-btn"
                        : "block-btn"
                    }`}
                    onClick={() =>
                      toggleBlock(
                        user._id,
                        user.blocked
                      )
                    }
                  >
                    {user.blocked
                      ? "Unblock"
                      : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-cards">
        {filtered.map((user) => (
          <div
            className="user-card"
            key={user._id}
          >
            <div className="card-top">
              <div className="avatar">
                {user.name?.charAt(0)}
              </div>

              <div>
                <div className="user-name">
                  {user.name}
                </div>
                <div>{user.email}</div>
              </div>
            </div>

            <div className="card-item">
              Role :
              <span
                className={`badge ${user.role}`}
              >
                {user.role}
              </span>
            </div>

            <div className="card-item">
              Courses :
              {user.enrolledCourses?.length || 0}
            </div>

            <div className="card-item">
              Status :
              <span
                className={`badge ${
                  user.blocked
                    ? "blocked"
                    : "active"
                }`}
              >
                {user.blocked
                  ? "Blocked"
                  : "Active"}
              </span>
            </div>

            <button
              className={`action-btn ${
                user.blocked
                  ? "unblock-btn"
                  : "block-btn"
              }`}
              onClick={() =>
                toggleBlock(
                  user._id,
                  user.blocked
                )
              }
            >
              {user.blocked
                ? "Unblock User"
                : "Block User"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}