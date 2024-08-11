import { fetchCategorise } from '@/api/category';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategorise.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategorise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload && action.payload.categories;
      })
      .addCase(fetchCategorise.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categoriesSlice.reducer;
