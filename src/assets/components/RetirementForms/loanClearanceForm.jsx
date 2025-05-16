import React, { useState } from "react";

const LoanClearanceForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    serviceNumber: "",
    rank: "",
    unit: "",
    rod: "",
    reason: "",
    bankName: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Veteran Data Submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-container">
      <h2>Nigerian Navy Loan Clearance Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Service Number</label>
        <input
          type="text"
          name="serviceNumber"
          value={formData.serviceNumber}
          onChange={handleChange}
          required
        />

        <label>Rank</label>
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        />

        <label>Unit</label>
        <input
          type="text"
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          required
        />

        <label>ROD</label>
        <input
          type="text"
          name="rod"
          value={formData.rod}
          onChange={handleChange}
          required
        />

        <label >Reason:</label>
        <select id="reason" name="reason" value={formData.reason} onChange={handleChange} required>
          <option value="" disabled>
            Select a reason
          </option>
          <option value="retirement">Retirement</option>
          <option value="discharge_death">Discharge Death</option>
          <option value="loan_liquidation">Loan Liquidation</option>
        </select>

        <label>Bank Name</label>
        <input
          type="text"
          name="bankname"
          value={formData.bankName}
          onChange={handleChange}
          required
        />

        <label>Account Number</label>
        <input
          type="number"
          name="accountnumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoanClearanceForm;
