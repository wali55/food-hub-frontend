export const providerService = {
    getProviders: async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/provider-profile`, {
                next: {
                    tags: ["providers"]
                },
                cache: "no-store"
            });
        const result = await res.json();
        if (!result.success) {
            return {data: null, error: result.message || "Could not fetch providers"}
        }
        return {data: result.data, error: null}
        } catch (error: any) {
            return {data: null, error: error.message || "Could not fetch providers"}
        }
        
    }
}