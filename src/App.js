import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './assets/components/SideNav';
import Dashboard from './assets/pages/Dashboard';
import RequestForm from './assets/components/RequestForm';
import StatusTracker from './assets/components/StatusTracker';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/status-tracker" element={<StatusTracker />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
