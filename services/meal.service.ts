import { cookies } from "next/headers";

export type CreateMeal = {
  title: string;
  description: string;
  price: string | number;
  dietaryPref: string;
  categoryId: string;
};

export type UpdateMeal = {
  title?: string;
  description?: string;
  price?: string | number;
  dietaryPref?: string;
  categoryId?: string;
};

export const mealService = {
  getMeals: async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/meals`, {
        next: {
          tags: ["meals"],
        },
      });
      const result = await res.json();
      if (!result.success) {
        return { data: null, error: result.message || "Could not fetch meals" };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not fetch meals" };
    }
  },
  getMealItemById: async (id: string) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/meals/${id}`);
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch meal item",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch meal item",
      };
    }
  },
  getProviderMeals: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/meals/provider`, {
        next: {
          tags: ["provider-meals"],
        },
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
          error: result.message || "Could not fetch provider meals",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch provider meals",
      };
    }
  },
  createMeal: async (meal: CreateMeal) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/meals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(meal),
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not create meal",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not create meal",
      };
    }
  },
  updateMeal: async (meal: UpdateMeal, mealId: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/meals/${mealId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(meal),
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not update meal",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not update meal",
      };
    }
  },
  deleteMeal: async (mealId: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/meals/${mealId}`, {
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
          error: result.message || "Could not delete meal",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not delete meal",
      };
    }
  },
};
