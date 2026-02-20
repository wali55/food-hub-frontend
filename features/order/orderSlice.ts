import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  selectedOrder: {
    id: "",
    status: "",
    deliveryType: "",
    totalPrice: "",
    deliveryAddress: "",
    userId: "",
    createdAt: "",
    updatedAt: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
  },
});

export const { setOrders, setSelectedOrder } = orderSlice.actions;
export default orderSlice.reducer;
