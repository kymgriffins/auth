// src/features/auth/authThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AuthAPIResponse } from '../../types/index';
import { API_URL } from '../../constants/constants';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (
        credentials: { email: string; password: string },
        thunkAPI
    ) => {
        try {
            const response = await axios.post<AuthAPIResponse>(
                `${API_URL}/auth/login`,
                credentials
            );
            return response.data.data; // { user, token }
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.error || 'Login failed'
            );
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (
        userData: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
        },
        thunkAPI
    ) => {
        try {
            const response = await axios.post<AuthAPIResponse>(
                `${API_URL}/auth/register`,
                userData
            );
            return response.data.data; // { user, token }
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.error || 'Registration failed'
            );
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState() as {
                auth: { token: string };
            };
            const response = await axios.get<AuthAPIResponse>(
                `${API_URL}/auth/me`,
                {
                    headers: {
                        Authorization: `Bearer ${state.auth.token}`,
                    },
                }
            );
            return response.data.data.user; // user
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.error || 'Failed to fetch user'
            );
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            // If you have a logout endpoint, you can call it here:
            // await axios.post(`${API_URL}/auth/logout`);
            return; // No payload needed
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.error || 'Logout failed'
            );
        }
    }
);
