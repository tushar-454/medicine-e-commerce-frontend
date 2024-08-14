import { fetchAdminUsers, userLogin } from '@/api/user';
import { InitialStateType } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  user: null,
  users: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoggedIn = false;
      });
    builder
      .addCase(fetchAdminUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAdminUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchAdminUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
