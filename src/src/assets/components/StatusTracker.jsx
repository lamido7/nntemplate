import React, { useState } from 'react';
import './StatusTracker.css';

const StatusTracker = () => {
  // Sample officer data 
  const [officer, setOfficer] = useState({
    name: "LT. John Doe",
    rank: "Lieutenant",
    oNumber: "NN1234",
    retirementDate: "2025-12-31",
    leaveEndDate: "2025-11-30",
  });

  // Checklist tasks 
  const [tasks, setTasks] = useState([
    { id: 1, authority: "Medical Examination", status: "pending", comment: "Not required if medically unfit" },
    { id: 2, authority: "Mess Treasurer", status: "pending", comment: "All bills paid" },
    { id: 3, authority: "Naval Store", status: "pending", comment: "Govt. stores returned" },
    { id: 4, authority: "Last Unit/Ship/Base", status: "pending", comment: "Small arms returned" },
    { id: 5, authority: "NPM", status: "pending", comment: "Passport/ID recovered" },
    { id: 6, authority: "MTO (NHQ)", status: "pending", comment: "Staff car recovered" },
    { id: 7, authority: "CCPO", status: "pending", comment: "Debt clearance" },
    { id: 8, authority: "DNA", status: "pending", comment: "Ledger clearance" },
    { id: 9, authority: "Barracks Officer", status: "pending", comment: "Checked Out of Official Accomadation" }
   
  ]);

  // Toggle task completion (simulate admin approval)
  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  // Check if all tasks are completed
  const isCompleted = tasks.every(task => task.status === "completed");

  return (
    <div className="retirement-workflow-container">
      <h1 className="workflow-title">RETIRED OFFICERS LEAVING ROUTINE</h1>
      <div className="officer-details-card">
        <div className="card-header primary-header">
          <h2>Officer Details</h2>
        </div>
        <div className="card-body">
          <div className="detail-row">
            <div className="detail-label">Name:</div>
            <div className="detail-value">{officer.name}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Rank:</div>
            <div className="detail-value">{officer.rank}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Service No:</div>
            <div className="detail-value">{officer.oNumber}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Retirement Date:</div>
            <div className="detail-value">{officer.retirementDate}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Leave Ends:</div>
            <div className="detail-value">{officer.leaveEndDate}</div>
          </div>
        </div>
      </div>

      <div className="checklist-card">
        <div className="card-header secondary-header">
          <h2>Clearance Checklist</h2>
        </div>
        <div className="card-body">
          <table className="task-table">
            <thead>
              <tr>
                <th>Authority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>
                    <div className="authority-name">{task.authority}</div>
                    <div className="task-comment">{task.comment}</div>
                  </td>
                  <td>
                    <span className={`status-badge ${task.status}`}>
                      {task.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => updateTaskStatus(task.id, "completed")}
                      className={`action-button ${task.status === "completed" ? "completed" : ""}`}
                      disabled={task.status === "completed"}
                    >
                      Mark Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isCompleted && (
        <div className="approval-card">
          <div className="card-header success-header">
            <h2>Final Discharge Approval</h2>
          </div>
          <div className="card-body">
            <p>All clearances completed. Ready for discharge certificate issuance.</p>
            <button className="approve-button">
              Issue Discharge Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusTracker;
