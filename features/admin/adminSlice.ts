import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: {
    totalUsers: 0,
    totalOrders: 0,
    totalMeals: 0,
    totalCategories: 0,
  },
  users: []
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminStats: (state, action) => {
      state.stats = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
});

export const { setAdminStats, setUsers } = adminSlice.actions;
export default adminSlice.reducer;
