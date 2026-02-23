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
  getOrderById: async (id: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/orders/${id}`, {
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
          error: result.message || "Could not fetch order",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch order",
      };
    }
  },
  getProviderOrders: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/orders/provider`, {
        next: {
          tags: ["provider-orders"]
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
          error: result.message || "Could not fetch provider orders",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not fetch provider orders",
      };
    }
  },
  updateOrderStatus: async (order: {status: string},orderId: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        }, 
        credentials: "include",
        body: JSON.stringify(order)
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not update order status",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not update order status",
      };
    }
  }
};
