"use client"

import { setMeals } from "@/features/meal/mealSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type Meal = {
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
  provider: {
    restaurantName: string;
  };
};

const MealsInitializer = ({meals}: {meals: Meal[]}) => {
 const dispatch = useAppDispatch();

 useEffect(() => {
    dispatch(setMeals(meals));
 }, [meals]);

  return (
    <div></div>
  )
}

export default MealsInitializer