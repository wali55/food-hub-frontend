import { cookies } from "next/headers";

export const reviewService = {
  getReviews: async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/reviews`, {
        next: {
          tags: ["reviews"],
        },
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch reviews",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not fetch reviews" };
    }
  },
  createReview: async (review: {content: string}) => {
      try {
        const cookieStore = await cookies();
        const res = await fetch(`${process.env.BACKEND_URL}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          credentials: "include",
          body: JSON.stringify(review),
        });
        const result = await res.json();
        if (!result.success) {
          return {
            data: null,
            error: result.message || "Could not create review",
          };
        }
        return { data: result.data, error: null };
      } catch (error: any) {
        return {
          data: null,
          error: error.message || "Could not create review",
        };
      }
    },
};
