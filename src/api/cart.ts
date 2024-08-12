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

export const deleteCart = createAsyncThunk(
  'cart/deleteCart',
  async (cartId: string) => {
    try {
      const response = await axios.delete(`/cart/${cartId}`);
      return response.status;
    } catch (error) {
      throw new Error();
    }
  },
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ cartId, quantity }: { cartId: string; quantity: number }) => {
    try {
      const response = await axios.put(`/cart/${cartId}`, { quantity });
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },
);
