import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRelatedProduct = createAsyncThunk(
  'relatedProduct/getRelatedProduct',
  async (productId: string) => {
    try {
      const res = await axios.get(`/product/${productId}`);
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);
