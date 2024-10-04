import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AdminDashboard from './Pages/AdminDashboard';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/register" element={<RegisterPage/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/police" element={<LoginPage/>} />
        <Route path="/ambulance" element={<LoginPage/>} />
        <Route path="/firebrigade" element={<LoginPage/>} />
        <Route path="/public" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
