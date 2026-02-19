import { Meal } from "@/components/initializer/MealsInitializer";
import { createSlice } from "@reduxjs/toolkit";

export type CartMeal = {
  mealId: string;
  quantity: number;
  mealPrice: number;
  meal: Meal;
};

export type Cart = {
  count: number;
  total: number;
  mealItems: CartMeal[];
  deliveryAddress: string;
};

const initialState: Cart = {
  count: 0,
  total: 0,
  mealItems: [],
  deliveryAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingMeal = state.mealItems.find(
        (meal: CartMeal) => meal.mealId === action.payload.mealId,
      );

      if (!existingMeal) {
        state.count++;
        state.mealItems.push(action.payload);
        state.total += Number(action.payload.meal.price);
      }
    },
    increment: (state, action) => {
      state.mealItems.forEach((mealItem) => {
        if (mealItem.mealId === action.payload.mealId) {
          mealItem.quantity++;
          mealItem.mealPrice =
            Number(mealItem.mealPrice) + Number(mealItem.meal.price);
          state.total += Number(mealItem.meal.price);
        }
      });
    },
    decrement: (state, action) => {
      state.mealItems.forEach((mealItem) => {
        if (mealItem.mealId === action.payload.mealId) {
          mealItem.quantity--;
          mealItem.mealPrice =
            Number(mealItem.mealPrice) - Number(mealItem.meal.price);
          state.total -= Number(mealItem.meal.price);
        }
      });
    },
    removeCart: (state, action) => {
      const removedItem = state.mealItems.find(
        (mealItem) => mealItem.mealId === action.payload.mealId,
      );
      state.count--;
      state.total = state.total -= Number((removedItem as CartMeal).mealPrice);
      state.mealItems = state.mealItems.filter(
        (mealItem) => mealItem.mealId !== action.payload.mealId,
      );
    },
    setDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    clearCart: (state) => {
      state.count = 0;
      state.total = 0;
      state.mealItems = [];
      state.deliveryAddress = "";
    }
  },
});

export const { addCart, increment, decrement, removeCart, setDeliveryAddress, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
