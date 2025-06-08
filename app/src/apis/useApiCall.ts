import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SUCCESS_MESSAGES, ERROR_MESSAGES,LOADING_MESSAGES } from '../constants/constants'; // adjust path if needed

type Status = 'idle' | 'loading' | 'success' | 'error';

interface UseApiCallOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (message: string) => void;
  withAuth?: boolean;
  headers?: Record<string, string>;
}

function useApiCall<T = any>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  const callApi = async (
    apiFunc: (config?: { headers?: Record<string, string> }) => Promise<{ data: T }>,
    options?: UseApiCallOptions<T>
  ): Promise<T | null> => {
    setLoading(true);
    setStatus('loading');
    setError(null);

    try {
      const headers: Record<string, string> = {};

      if (options?.withAuth) {
        const token = localStorage.getItem('token');
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      if (options?.headers) {
        Object.assign(headers, options.headers);
      }

      const response = await apiFunc({ headers });

      setData(response.data);
      setStatus('success');

      // Use your success messages constant here
      // toast.success(LOADING_MESSAGES.loading);

      options?.onSuccess?.(response.data);

      return response.data;
    } catch (err: any) {
      const message =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err.message ||
        ERROR_MESSAGES.genericError;

      setError(message);
      setStatus('error');

      // Use your error messages constant here (fall back if no specific error message)
      // toast.error(message || ERROR_MESSAGES.genericError);

      options?.onError?.(message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setStatus('idle');
    setLoading(false);
  };

  return { data, loading, error, status, callApi, reset };
}

export default useApiCall;
