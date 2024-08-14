import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await axios.post('/auth/login', { email, password });
      if (res.data.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw new Error();
    }
  },
);

export const fetchAdminUsers = createAsyncThunk(
  'user/fetchAdminUsers',
  async () => {
    try {
      const res = await axios.get('/admin/users');
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);

export const fetchSuperAdminUsers = createAsyncThunk(
  'user/fetchSuperAdminUsers',
  async () => {
    try {
      const res = await axios.get('/super-admin/users');
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);
