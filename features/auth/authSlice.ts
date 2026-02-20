import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  id: "",
  name: "",
  email: "",
  phone: "",
  isActive: false,
  address: "",
  role: "",
  createdAt: "",
  updatedAt: "",
};

const initialState = {
  isAuthenticated: false,
  user: initialUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.user = initialUser;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
