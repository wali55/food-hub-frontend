import { configureStore } from '@reduxjs/toolkit';
import mealReducer from "./features/meal/mealSlice";
import providerReducer from "./features/provider/providerSlice";
import reviewReducer from "./features/review/reviewSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    provider: providerReducer,
    review: reviewReducer,
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;