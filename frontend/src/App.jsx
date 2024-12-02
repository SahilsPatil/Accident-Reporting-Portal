import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ReportsPage from './Pages/ReportsPage';
import Dashboard from './Pages/Dashboard';
import LivePage from './Pages/LivePage';
import UserManagament from './Pages/UserManagament';
import JobsPage from './Pages/JobsPage';
import ProtectedRoute from './Components/ProtectedRoute';
import EmergencyServicesPage from './Pages/EmergencyServicesPage';
import ReportAccident from './Pages/ReportAccident';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route path="/reports" element={<ProtectedRoute allowedRoles={['admin', 'police', 'ambulance', 'fire', 'public']}><ReportsPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'police', 'ambulance', 'fire', 'public']}><Dashboard /></ProtectedRoute>} />
        <Route path="/live" element={<ProtectedRoute allowedRoles={['admin', 'police', 'ambulance', 'fire']}><LivePage /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}><UserManagament /></ProtectedRoute>} />
        {/* <Route path="/jobs" element={<ProtectedRoute allowedRoles={['admin', 'police', 'ambulance', 'fire']}><JobsPage /></ProtectedRoute>} /> */}
        <Route path="/jobs" element={<ProtectedRoute allowedRoles={['admin']} ><JobsPage /></ProtectedRoute>} />
        <Route path="/emergencyservices" element={<EmergencyServicesPage />} />
        {/* <Route path="/ambulance" element={<EmergencyServicesPage />} />
        <Route path="/firebrigade" element={<EmergencyServicesPage />} /> */}
        <Route path="/public" element={<ReportAccident />} />
      </Routes>
    </Router>
  );
};

export default App;
