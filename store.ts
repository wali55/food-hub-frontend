import { configureStore } from '@reduxjs/toolkit';
import MealReducer from "./features/meal/mealSlice";
import ProviderReducer from "./features/provider/providerSlice";
import ReviewReducer from "./features/review/reviewSlice";

export const store = configureStore({
  reducer: {
    meal: MealReducer,
    provider: ProviderReducer,
    review: ReviewReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;