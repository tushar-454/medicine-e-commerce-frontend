import { createToken, deleteToken } from '@/api/token';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { token: string } = {
  token: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createToken.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
    });
    builder.addCase(deleteToken.fulfilled, (state) => {
      state.token = '';
    });
  },
});

export default tokenSlice.reducer;
