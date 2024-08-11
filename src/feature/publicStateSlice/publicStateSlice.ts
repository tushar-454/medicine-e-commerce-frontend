import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const publicStateSlice = createSlice({
  name: 'publicState',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = publicStateSlice.actions;
export default publicStateSlice.reducer;
