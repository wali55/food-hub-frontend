import { configureStore } from '@reduxjs/toolkit';
import MealReducer from "./features/meal/mealSlice";

export const store = configureStore({
  reducer: {
    meal: MealReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;