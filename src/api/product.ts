import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (category?: string) => {
    try {
      if (category) {
        const res = await axios.get(`/product?category=${category}`);
        return res.data;
      }
      const res = await axios.get('/product');
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);
