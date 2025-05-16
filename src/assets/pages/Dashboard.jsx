import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Placeholder data
  const userName = "Officer John Doe";
  const serviceNumber = "123456789";
  const yearsServed = 29;
  const retirementStatus = "Pending";
  const documentsUploaded = 3;
  const totalDocumentsRequired = 5;
  const targetRetirementDate = "Jan 1, 2026";
  const recentActivities = [
    "Retirement request submitted on May 14, 2025",
    "Document uploaded: Medical Clearance",
    "HR requested additional document"
  ];
  const toDoList = [
    "Fill Retirement Form",
    "Upload Medical Clearance",
    "Upload Final Clearance Letter"
  ];

  return (
    <div className="dashboard-container">
      {/* Welcome Message */}
      <section className="welcome-section">
        <h1>Welcome, {userName}</h1>
        <p>Service Number: {serviceNumber}</p>
        <p>You've served for {yearsServed} years. Eligible for retirement.</p>
      </section>

      {/* Quick Stats Cards */}
      <section className="quick-stats">
        <div className="card">
          <h3>Retirement Status</h3>
          <p>{retirementStatus}</p>
        </div>
        <div className="card">
          <h3>Documents Uploaded</h3>
          <p>{documentsUploaded} of {totalDocumentsRequired} Required</p>
        </div>
        <div className="card">
          <h3>Years Served</h3>
          <p>{yearsServed} Years</p>
        </div>
        <div className="card">
          <h3>Target Retirement Date</h3>
          <p>{targetRetirementDate}</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      {/* To-Do List / Requirements */}
      <section className="to-do-list">
        <h2>To-Do List / Requirements</h2>
        <ul>
          {toDoList.map((item, index) => (
            <li key={index}>☐ {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
