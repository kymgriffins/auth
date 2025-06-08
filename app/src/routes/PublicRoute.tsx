import { Navigate } from 'react-router-dom';
import React from 'react';
import type { PublicRouteProps } from '../types';

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  isAuthenticated,
  loading,
  redirectPath = '/dashboard', // redirect authenticated users here
}) => {
  if (loading) {
    return <div>Loading...</div>; // You can replace with spinner or loading component
  }

  return isAuthenticated ? (
    <Navigate to={redirectPath} replace />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
