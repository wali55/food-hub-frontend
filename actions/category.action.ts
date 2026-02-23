"use server"

import { categoryService } from "@/services/category.service";
import { revalidateTag } from "next/cache";

export const getCategories = async () => {
    const result = await categoryService.getCategories();
    return result;
}

export const createCategory = async (category: {title: string}) => {
    const result = await categoryService.createCategory(category);
    revalidateTag("categories", "max");
    return result;
}

export const updateCategory = async (category: {title: string}, id: string) => {
    const result = await categoryService.updateCategory(category, id);
    revalidateTag("categories", "max");
    return result;
}

export const deleteCategory = async (id: string) => {
    const result = await categoryService.deleteCategory(id);
    revalidateTag("categories", "max");
    return result;
}