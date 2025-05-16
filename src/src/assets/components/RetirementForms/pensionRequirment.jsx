import React, { useState } from 'react';

// this form can only be filled when the leave routine is completed
const PensionRequirment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    serviceNumber: "",
    rank: "",
    permanentAddress: "",
    contactAddress: "",
    phoneNumber: "",
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
    console.log("Loan Data Submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-container">
      <h2>Requirments to Process Pension and Gratuity</h2>
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

        <label>Permanent Address</label>
        <input
          type="text"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          required
        />

        <label>Contact Address</label>
        <input
          type="text"
          name="contactAddress"
          value={formData.contactAddress}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required/>

        <label>Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          required
        />

        <label>Account Number</label>
        <input
          type="number"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PensionRequirment;
