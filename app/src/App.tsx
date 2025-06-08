// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './features/authentication/Login';
import Dashboard from './features/dashboard/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import './App.css';
import Register from './features/authentication/Register';
import { useNavigate } from 'react-router-dom';
import Users from './features/users/Users';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [loading, setLoading] = useState(false); // adapt as needed
  // const navigate = useNavigate();

  // Optional: sync auth state if token removed elsewhere
  useEffect(() => {
    const handleStorage = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);

    
  }, []);

  // Handler to update auth state from child
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isAuthenticated} loading={loading}>
              <Login onLoginSuccess={handleLoginSuccess} />
            </PublicRoute>
          }
        />
        {/* <Route
  path="/register"
  element={
    <PublicRoute isAuthenticated={isAuthenticated} loading={loading}>
      <Register
      //  onRegisterSuccess={handleLoginSuccess}
        />
    </PublicRoute>
  }
/> */}
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} loading={loading}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} loading={loading}>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
