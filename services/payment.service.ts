import { cookies } from "next/headers";
import { OrderData } from "./order.service";

export const paymentService = {
  createPayPalOrder: async (orderData: OrderData) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/payments/create-paypal-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(orderData),
      });
      console.log("cookie", cookieStore.toString());
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not create PayPal order",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not create PayPal order",
      };
    }
  },

  capturePayPalOrder: async (orderId: string) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${process.env.BACKEND_URL}/payments/capture-paypal-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify({ orderId }),
      });
      const result = await res.json();
      if (!result.success) {
        return {
          data: null,
          error: result.message || "Could not capture PayPal order",
        };
      }
      return { data: result.data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: error.message || "Could not capture PayPal order",
      };
    }
  },
};
