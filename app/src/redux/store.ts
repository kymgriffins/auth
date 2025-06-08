import authReducer from '../features/authentication/authSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
