import axios from '@/utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk(
  'order/getOrders',
  async (userId: string) => {
    try {
      const response = await axios.get(`/order/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);

export const getAdminOrders = createAsyncThunk(
  'order/getAdminOrders',
  async () => {
    try {
      const response = await axios.get(`/admin/orders`);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);
