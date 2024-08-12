import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createToken = createAsyncThunk(
  'token/createToken',
  async ({ email, role }: { email: string; role: string }) => {
    try {
      const response = await axios.post('/auth/create-token', {
        email,
        role,
      });
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);

export const deleteToken = createAsyncThunk('token/deleteToken', async () => {
  try {
    await axios.delete('/auth/delete-token');
  } catch (error) {
    throw new Error();
  }
});
