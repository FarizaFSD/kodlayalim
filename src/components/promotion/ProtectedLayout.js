import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const isAuthToken = !!localStorage.getItem('authToken');

  return isAuthToken ? children : <Navigate to='/giris-yap' />;
};

export default ProtectedLayout;
