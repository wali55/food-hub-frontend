"use server"

import { categoryService } from "@/services/category.service";

export const getCategories = async () => {
    const result = await categoryService.getCategories();
    return result;
}