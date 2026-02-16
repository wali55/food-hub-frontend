"use client"

import { useAppSelector } from "@/hooks";
import MealCard from "./MealCard";
import { Meal } from "@/components/initializer/MealsInitializer";

const Meals = ({ limit }: { limit?: number; }) => {
  const {meals} = useAppSelector((state) => state.meal);

  const displayedMeals = limit && meals?.length ? meals.slice(0, limit) : meals;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {meals &&
        displayedMeals.map((meal) => <MealCard key={(meal as Meal).id} meal={meal} />)}
    </div>
  );
};

export default Meals;
