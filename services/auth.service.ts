import { cookies } from "next/headers";

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export const authService = {
  register: async (registerData: RegisterData) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
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
  login: async (loginData: LoginData) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not login",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not login" };
    }
  },
  logout: async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not logout",
        };
      }
      return { data: result.success, error: null };
    } catch (error: any) {
      return { data: null, error: error.message || "Could not logout" };
    }
  },
  getCurrentUser: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/auth/me`, {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not fetch current user",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch current user",
      };
    }
  },
};
