import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async ({ category, user }: { category: string; user: string }) => {
    try {
      if (category) {
        const res = await axios.post(`/product?category=${category}`, { user });
        return res.data;
      }
      const res = await axios.post('/product', { user });
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);

export const fetchAdminProduct = createAsyncThunk(
  'product/fetchAdminProduct',
  async () => {
    try {
      const res = await axios.get('/admin/products');
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id: string) => {
    try {
      const res = await axios.get(`/product/${id}`);
      return res.data;
    } catch (error) {
      throw new Error();
    }
  },
);
