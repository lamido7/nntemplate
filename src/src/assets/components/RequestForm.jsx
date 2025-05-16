//forms should render based on who is logged in i.e either commissioned or non-commissioned(rating) 
// officer
import React, { useState } from 'react';
import VeteranForm from './RetirementForms/veteranForm';
// Placeholder imports for future forms
import LoanClearanceForm from './RetirementForms/loanClearanceForm';
import PensionRequirment from './RetirementForms/pensionRequirment';

const RequestForm = () => {
  const [activeTab, setActiveTab] = useState('veteran');

  const renderForm = () => {
    switch (activeTab) {
      case 'veteran':
        return <LoanClearanceForm />;
      case 'loanClearance':
        return <VeteranForm />;
      case 'pensionRequirment':
        return <PensionRequirment />;
      default:
        return <LoanClearanceForm />;
    }
  };

  return (
    <div>
      <h2>Request Forms</h2>
      <div style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => setActiveTab('veteran')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'veteran' ? '2px solid #007bff' : '2px solid transparent',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: activeTab === 'veteran' ? 'bold' : 'normal',
            color: activeTab === 'veteran' ? '#007bff' : '#000',
          }}
        >
          Loan Clearance Form
        </button>
        <button
          onClick={() => setActiveTab('loanClearance')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'loanClearance' ? '2px solid #007bff' : '2px solid transparent',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: activeTab === 'loanClearance' ? 'bold' : 'normal',
            color: activeTab === 'loanClearance' ? '#007bff' : '#000',
          }}
          // disabled
          title="Loan Clearance Form"
        >
          Veteran Form
        </button>
        <button
          onClick={() => setActiveTab('pensionRequirment')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'pensionRequirment' ? '2px solid #007bff' : '2px solid transparent',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: activeTab === 'pensionRequirment' ? 'bold' : 'normal',
            color: activeTab === 'pensionRequirment' ? '#007bff' : '#000',
          }}
          // disabled
          title="Pension Requirement Form"
        >
          Pension Requirement Form
        </button>
      </div>
      <div>
        {renderForm()}
      </div>
    </div>
  );
};

export default RequestForm;
