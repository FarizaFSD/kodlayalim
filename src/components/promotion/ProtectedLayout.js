import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const authToken = !!localStorage.getItem('authToken');

  return authToken ? children : <Navigate to='/giris-yap' />;
};

export default ProtectedLayout;
