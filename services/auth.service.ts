export type RegisterData = {
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    address: string;
}

export const authService = {
  register: async (registerData: RegisterData) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData)
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not register",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not register" };
    }
  },
};