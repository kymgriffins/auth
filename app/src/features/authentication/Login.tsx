import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../constants/constants';
import useApiCall from '../../apis/useApiCall';
import { loginUser } from '../../apis/apiCalls';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  // const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { callApi, loading, error } = useApiCall<{  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string; }>();

  const handleLogin = async () => {
    // if (!email.trim() || !password) {
    //   toast.error('Please enter both email and password');
    //   return;
    // }

    await callApi(() => loginUser({
      // email: email.trim(), 
      username: username.trim(),
      password
    }), {
      onSuccess: (data) => {
        localStorage.setItem('token', data.accessToken);      // Save access token
        localStorage.setItem('refreshToken', data.refreshToken); // Save refresh token (optional)
        localStorage.setItem('userId', data.id.toString());   // Save user ID
        localStorage.setItem('user', JSON.stringify(data));   // Save full user object if needed
        toast.success(SUCCESS_MESSAGES.loginSuccess);
        onLoginSuccess(); // This triggers redirect by updating auth state in App
      },
      onError: (msg) => {
        toast.error(msg || ERROR_MESSAGES.loginFailed);
        setPassword(''); // clear password on error
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        disabled={loading}
      />
      {/* <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={loading}
      /> */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
