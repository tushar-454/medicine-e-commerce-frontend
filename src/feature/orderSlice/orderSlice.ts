import { getAdminOrders, getOrders } from '@/api/order';
import { OrderInitialStateType } from '@/types/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OrderInitialStateType = {
  isLoading: false,
  isError: false,
  orders: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.orders = action.payload.orders;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getAdminOrders.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAdminOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.orders = action.payload.orders;
      })
      .addCase(getAdminOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default orderSlice.reducer;
