import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  if (!isAuthenticated && !loading) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
