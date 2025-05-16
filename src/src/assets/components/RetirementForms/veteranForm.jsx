import React, { useState } from 'react';
import './RetirementForms.css';

const VeteranForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    serviceNumber: '',
    rank: '',
    enlistmentDate: '',
    retirementDate: '',
    contact: '',
    nextOfKin: '',
    nextOfKinContact: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Veteran Data Submitted:', formData);
    alert('Form submitted!');
  };

  return (
    <div className="form-container">
      <h2>Veteran Data Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Service Number</label>
        <input type="text" name="serviceNumber" value={formData.serviceNumber} onChange={handleChange} required />

        <label>Rank</label>
        <input type="text" name="rank" value={formData.rank} onChange={handleChange} required />

        <label>Date of Enlistment</label>
        <input type="date" name="enlistmentDate" value={formData.enlistmentDate} onChange={handleChange} required />

        <label>Date of Retirement</label>
        <input type="date" name="retirementDate" value={formData.retirementDate} onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Residential Address</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Next of Kin</label>
        <input type="text" name="nextOfKin" value={formData.nextOfKin} onChange={handleChange} required />

        <label>Next of Kin Contact</label>
        <input type="text" name="nextOfKinContact" value={formData.nextOfKinContact} onChange={handleChange} required />

        <label>Next of Kin Address</label>
        <input type="text" name="nextOfKinContact" value={formData.nextOfKinContact} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VeteranForm;
