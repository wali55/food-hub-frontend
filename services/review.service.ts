export const reviewService = {
    getReviews: async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/reviews`, {
                next: {
                    tags: ["reviews"]
                },
                cache: "no-store"
            });
        const result = await res.json();
        if (!result.success) {
            return {data: null, error: result.message || "Could not fetch reviews"}
        }
        return {data: result.data, error: null}
        } catch (error: any) {
            return {data: null, error: error.message || "Could not fetch reviews"}
        }
        
    }
}