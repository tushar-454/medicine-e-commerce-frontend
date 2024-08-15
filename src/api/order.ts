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
  async ({
    filterByStatus,
    filterByDate,
  }: {
    filterByStatus: string;
    filterByDate: string;
  }) => {
    try {
      if (filterByStatus && filterByDate) {
        const response = await axios.get(
          `/admin/orders?orderStatus=${filterByStatus}&createdAt=${filterByDate}`,
        );
        return response.data;
      }
      if (filterByDate) {
        const response = await axios.get(
          `/admin/orders?createdAt=${filterByDate}`,
        );
        return response.data;
      }
      if (filterByStatus) {
        const response = await axios.get(
          `/admin/orders?orderStatus=${filterByStatus}`,
        );
        return response.data;
      }
      const response = await axios.get(`/admin/orders`);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);
