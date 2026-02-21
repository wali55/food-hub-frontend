"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setProviderMeals } from "@/features/meal/mealSlice";

export type ProviderMeal = {
  id: string;
  title: string;
  description: string;
  price: string | number;
  dietaryPref: string;
  providerId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  category: {
    title: string;
  };
};

const ProviderMealsInitializer = ({
  providerMeals,
}: {
  providerMeals: ProviderMeal[];
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProviderMeals(providerMeals));
  }, [providerMeals]);

  return <div></div>;
};

export default ProviderMealsInitializer;
