import { cookies } from "next/headers";

export type UpdateUserStatus = {
  isActive: boolean;
}

export const adminService = {
  getAdminStats: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/admin/stats`, {
        next: {
          tags: ["admin-stats"],
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
          error: result.message || "Could not fetch admin stats",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch admin stats",
      };
    }
  }, 
  getAllUsers: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/admin/users`, {
        next: {
          tags: ["users"]
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
          error: result.message || "Could not fetch users",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch users",
      };
    }
  },
  updateUserStatus: async (user: UpdateUserStatus, userId: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/admin/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(user)
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not update user status",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not update user status",
      };
    }
  },
  getAllOrders: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/admin/orders`, {
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
          error: result.message || "Could not fetch orders",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch orders",
      };
    }
  },
};
