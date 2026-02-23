import { Category } from "@/components/initializer/CategoriesInitializer";
import { cookies } from "next/headers";

export const categoryService = {
    getCategories: async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
        next: {
          tags: ["categories"],
        },
      });
      const result = await res.json();
      if (!result.success) {
        return { data: null, error: result.message || "Could not fetch categories" };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not fetch categories" };
    }
  },
  createCategory: async (category: {title: string}) => {
      try {
        const cookieStore = await cookies();
        const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
          body: JSON.stringify(category),
        });
        const result = await res.json();
        if (!result.success) {
          return {
            data: null,
            error: result.message || "Could not create category",
          };
        }
        return { data: result.data, error: null };
      } catch (error: any) {
        return {
          data: null,
          error: error.message || "Could not create category",
        };
      }
    },
  updateCategory: async (category: {title: string}, id: string) => {
      try {
        const cookieStore = await cookies();
        const res = await fetch(`${process.env.BACKEND_URL}/categories/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
          body: JSON.stringify(category),
        });
        const result = await res.json();
        if (!result.success) {
          return {
            data: null,
            error: result.message || "Could not update category",
          };
        }
        return { data: result.data, error: null };
      } catch (error: any) {
        return {
          data: null,
          error: error.message || "Could not update category",
        };
      }
    },
  deleteCategory: async (id: string) => {
      try {
        const cookieStore = await cookies();
        const res = await fetch(`${process.env.BACKEND_URL}/categories/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
        });
        const result = await res.json();
        if (!result.success) {
          return {
            data: null,
            error: result.message || "Could not delete category",
          };
        }
        return { data: result.data, error: null };
      } catch (error: any) {
        return {
          data: null,
          error: error.message || "Could not delete category",
        };
      }
    },
}