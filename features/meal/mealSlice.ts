import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  providerMeals: [],
  selectedMeal: {
    id: "",
    title: "",
    description: "",
    price: "",
    dietaryPref: "ALL",
    providerId: "",
    categoryId: "",
    createdAt: "",
    updatedAt: "",
    category: {
      title: "",
    },
    provider: {
      restaurantName: "",
    },
  },
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    setSelectedMeal: (state, action) => {
      state.selectedMeal = action.payload;
    },
    setProviderMeals: (state, action) => {
      state.providerMeals = action.payload;
    }
  },
});

export const { setMeals, setSelectedMeal, setProviderMeals } = mealSlice.actions;
export default mealSlice.reducer;
