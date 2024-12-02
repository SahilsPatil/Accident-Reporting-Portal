import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();    
    console.log(user);
    
    const token = localStorage.getItem('jwtToken');
    if (!token) return <Navigate to="/login" />; // Redirect to login if no token
    if (user === null) return null
    if (!allowedRoles.includes(user?.role)) return <Navigate to="/login" />; // Redirect if role not allowed

    return children;
};

export default ProtectedRoute;

