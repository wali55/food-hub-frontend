"use server"

import { mealService } from "@/services/meal.service"

export const getMeals = async () => {
    const result = await mealService.getMeals();
    return result;
}

export const getMealItemById = async (id: string) => {
    const result = await mealService.getMealItemById(id);
    return result;
}