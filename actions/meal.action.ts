"use server"

import { CreateMeal, mealService, UpdateMeal } from "@/services/meal.service"
import { revalidateTag } from "next/cache";

export const getMeals = async () => {
    const result = await mealService.getMeals();
    return result;
}

export const getMealItemById = async (id: string) => {
    const result = await mealService.getMealItemById(id);
    return result;
}

export const getProviderMeals = async () => {
    const result = await mealService.getProviderMeals();
    return result;
}

export const createMeal = async (meal: CreateMeal) => {
    const result = await mealService.createMeal(meal);
    revalidateTag("meals", "max");
    revalidateTag("provider-meals", "max");
    return result;
}

export const updateMeal = async (meal: UpdateMeal, mealId: string) => {
    const result = await mealService.updateMeal(meal, mealId);
    revalidateTag("meals", "max");
    revalidateTag("provider-meals", "max");
    return result;
}

export const deleteMeal = async (mealId: string) => {
    const result = await mealService.deleteMeal(mealId);
    revalidateTag("meals", "max");
    revalidateTag("provider-meals", "max");
    return result;
}