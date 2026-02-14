"use server"

import { mealService } from "@/services/meal.service"

export const getMeals = async () => {
    const result = await mealService.getMeals();
    return result;
}