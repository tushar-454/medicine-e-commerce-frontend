import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCarts = createAsyncThunk(
  'cart/getCarts',
  async (userId: string) => {
    try {
      const response = await axios.get(`/cart/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);
