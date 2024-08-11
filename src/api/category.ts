import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategorise = createAsyncThunk(
  'category/fetchCategorise',
  async () => {
    try {
      const res = await axios.get('/category');
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);
