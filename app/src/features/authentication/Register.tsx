import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useApiCall from '../../apis/useApiCall';
import { registerUser } from '../../apis/apiCalls';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../constants/constants';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { callApi, loading, error } = useApiCall<{ token: string; id: string }>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error(ERROR_MESSAGES.missingFields || 'Please fill in all fields.');
      return;
    }

    await callApi(() => registerUser({ email, password }), {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
       
        localStorage.setItem('id', data.id);
        toast.success(SUCCESS_MESSAGES.registrationSuccess);
        navigate('/dashboard');
      },
      onError: (msg) => {
        toast.error(msg || ERROR_MESSAGES.registrationFailed);
      },
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} disabled={loading} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} disabled={loading} />
      <button onClick={handleRegister} disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
