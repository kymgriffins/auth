import React from 'react';
import { Navigate } from 'react-router-dom';
import type { PrivateRouteProps } from '../types';

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  loading,
  redirectPath = '/login',
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;
