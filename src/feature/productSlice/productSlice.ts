import {
  fetchAdminProduct,
  fetchProduct,
  fetchProductById,
} from '@/api/product';
import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceInitialState } from './../../types/product';

const initialState: ProductSliceInitialState = {
  isLoading: false,
  isError: false,
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload.products;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(fetchAdminProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAdminProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload.products;
      })
      .addCase(fetchAdminProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
