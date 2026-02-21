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
}