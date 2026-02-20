import { cookies } from "next/headers";

export type OrderData = {
  mealItems: {
    mealId: string;
    quantity: number;
  }[];
  deliveryAddress: string;
};

export const orderService = {
  createOrder: async (orderData: OrderData) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(orderData),
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not order",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not order",
      };
    }
  },
  getCustomerOrders: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/orders/customer`, {
        next: {
          tags: ["customer-orders"]
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
          error: result.message || "Could not fetch customer orders",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch customer orders",
      };
    }
  },
};
