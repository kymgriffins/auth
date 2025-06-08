import axios   from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { UsersResponse } from '../types/index'; // Adjust the import path as necessary
import { API_URL } from '../constants/constants';
export const fetchUsers = (
  config?: AxiosRequestConfig
): Promise<{ data: UsersResponse }> => {
  return axios.get(`${API_URL}users`, config);
};
export const fetchUserById = (id: string, config?: { headers?: Record<string, string> }) => {
  return axios.get(`${API_URL}api/users/${id}`, config);
};


export const loginUser = (payload: { 
  // email: string; 
  username: string;
  password: string
 }) =>
  axios.post(`${API_URL}auth/login`, payload, {
    headers: {
      // 'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json',
    },
  });

  export const registerUser = (payload: {
    email: string;
    password: string;
    // firstName: string;
    // lastName: string;
  }) =>
  axios.post(`${API_URL}api/register`, payload, {
    headers: {
      // 'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json',
    },
  });
