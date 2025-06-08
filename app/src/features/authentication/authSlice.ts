// src/features/auth/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthAPIResponse, User, AuthState } from '../../types/index';
import {
    loginUser,
    registerUser,
    fetchCurrentUser,
    logoutUser,
} from './authThunks';

// Initial state with type
const initialState: AuthState = {
    user: null,
    token: '',
    loading: false,
    error: null,
};

// Slice definition
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = '';
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthAPIResponse['data']>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthAPIResponse['data']>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.loading = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Fetch current user
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = '';
                state.loading = false;
                state.error = null;
            });
    },
});

// Export actions
export const { logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
