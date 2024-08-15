import { getRelatedProduct } from '@/api/relatedProduct';
import { RelatedProductType } from '@/types/relatedProduct';
import { createSlice } from '@reduxjs/toolkit';

const initialState: RelatedProductType = {
  relatedProducts: [],
  product: null,
  isLoading: false,
  isError: false,
};

const relatedProductSlice = createSlice({
  name: 'relatedProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRelatedProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getRelatedProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.relatedProducts = action.payload.relatedProduct;
      state.product = action.payload.product;
    });
    builder.addCase(getRelatedProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default relatedProductSlice.reducer;
