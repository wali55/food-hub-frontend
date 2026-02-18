"use client"

import { setSelectedMeal } from "@/features/meal/mealSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { Meal } from "./MealsInitializer";

const MealItemDetailsInitializer = ({meal}: {meal: Meal}) => {
 const dispatch = useAppDispatch();

 useEffect(() => {
    dispatch(setSelectedMeal(meal));
 }, [meal]);

  return (
    <div></div>
  )
}

export default MealItemDetailsInitializer