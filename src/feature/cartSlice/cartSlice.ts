import { deleteCart, getCarts, updateCart } from '@/api/cart';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = action.payload.carts;
      })
      .addCase(getCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder.addCase(deleteCart.fulfilled, () => {});
    builder.addCase(updateCart.fulfilled, () => {});
  },
});

export default cartSlice.reducer;
