import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    id: "",
    name: "",
    email: "",
    phone: "",
    isActive: false,
    address: "",
    role: "",
    createdAt: "",
    updatedAt: "",
    provider: null,
  },
};

const customerProfileSlice = createSlice({
  name: "customerProfile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = customerProfileSlice.actions;
export default customerProfileSlice.reducer;
