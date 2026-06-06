import { useState, useEffect, useCallback } from "react";
import API from "../../config/api";
import "./Analytics.css";

const ADMIN_API = "/admin";

export default function Analytics() {
  const [data, setData] = useState({
    totalRevenue: 0,
    monthRevenue: 0,
    totalOrders: 0,
    monthOrders: 0,
    totalCourses: 0,
    totalUsers: 0,
    topCourses: [],
    monthlyRevenue: [],
    months: [],
  });

  const token = localStorage.getItem("token");

  const fetchAnalytics = useCallback(async () => {
    try {
      const res = await API.get(`${ADMIN_API}/analytics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  if (!data.topCourses)
    return (
      <div className="analytics-loading">
        Loading analytics...
      </div>
    );

  const maxBar =
    data.monthlyRevenue.length > 0
      ? Math.max(...data.monthlyRevenue)
      : 1;

  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="analytics-header">
        <h2>📊 Revenue & Analytics</h2>
        <p>Platform performance overview</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {[
          {
            label: "Total Revenue",
            value: `₹${data.totalRevenue?.toLocaleString()}`,
            icon: "💰",
            color: "#059669",
            bg: "#ecfdf5",
          },
          {
            label: "This Month",
            value: `₹${data.monthRevenue?.toLocaleString()}`,
            icon: "📅",
            color: "#2563eb",
            bg: "#eff6ff",
          },
          {
            label: "Total Orders",
            value: data.totalOrders,
            icon: "🛒",
            color: "#d97706",
            bg: "#fffbeb",
          },
          {
            label: "Orders (Month)",
            value: data.monthOrders,
            icon: "📦",
            color: "#7c3aed",
            bg: "#f5f3ff",
          },
        ].map((item) => (
          <div key={item.label} className="stat-card">
            <div
              className="stat-icon"
              style={{
                background: item.bg,
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <div
              className="stat-value"
              style={{ color: item.color }}
            >
              {item.value}
            </div>

            <div className="stat-label">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="analytics-grid">
        {/* Revenue Chart */}
        <div className="analytics-card">
          <h3>Monthly Revenue</h3>

          <div className="chart-container">
            {data.monthlyRevenue.map((revenue, i) => (
              <div key={i} className="bar-wrapper">
                <span className="bar-value">
                  ₹{revenue}
                </span>

                <div
                  className="chart-bar"
                  style={{
                    height: `${(revenue / maxBar) * 130}px`,
                  }}
                />

                <span className="month-label">
                  {data.months[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Courses */}
        <div className="analytics-card">
          <h3>🔥 Top Selling Courses</h3>

          <div className="course-list">
            {data.topCourses?.map((course, i) => (
              <div key={i} className="course-item">
                <div className="course-header">
                  <div className="course-title">
                    <span>#{i + 1}</span>
                    {course.title}
                  </div>

                  <div className="course-revenue">
                    ₹{course.revenue.toLocaleString()}
                  </div>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        data.topCourses[0]?.sales
                          ? (course.sales /
                              data.topCourses[0].sales) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>

                <div className="sales-count">
                  {course.sales} sales
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}