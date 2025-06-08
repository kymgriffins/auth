import React, { useEffect, useState } from 'react';
import useApiCall from '../../apis/useApiCall';
import { fetchUserById } from '../../apis/apiCalls';
import type { User } from '../../types/index'; 
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../constants/constants';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { callApi } = useApiCall<{ data: User }>();

useEffect(() => {
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user'); // Assuming you saved the full user object as JSON string

  if (token && userString) {
    try {
      const userData = JSON.parse(userString);
      setUser(userData);  // directly set the user state from localStorage
      console.log(SUCCESS_MESSAGES.dataFetched);
    } catch (error) {
      console.error('Failed to parse user data from localStorage', error);
    }
  } else {
    console.error(ERROR_MESSAGES.missingToken);
  }
}, []);



  return (
  <div className="p-6 max-w-2xl mx-auto">
  <h1 className="text-3xl font-bold mb-8 text-center">Welcome</h1>

  {user ? (
    <div className="bg-white rounded-2xl shadow hover:shadow-md p-6 flex flex-col items-center transition">
      <img
        src={user.image}
        alt={`${user.firstName} avatar`}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mb-4"
      />
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500">Username: {user.username}</p>
        <p className="text-sm text-gray-500">Email: {user.email}</p>
        <p className="text-sm text-gray-500">Gender: {user.gender}</p>
        <p className="text-sm text-gray-500">User ID: {user.id}</p>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Loading user profile...</p>
  )}
</div>

  );
};

export default Dashboard;
