export const mealService = {
    getMeals: async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/meals`, {
                next: {
                    tags: ["meals"]
                }
            });
        const result = await res.json();
        console.log("meal service", result);
        if (!result.success) {
            return {data: null, error: result.message || "Could not fetch meals"}
        }
        return {data: result.data, error: null}
        } catch (error: any) {
            return {data: null, error: error.message || "Could not fetch meals"}
        }
        
    }
}