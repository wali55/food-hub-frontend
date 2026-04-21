"use server";

import { paymentService } from "@/services/payment.service";
import { OrderData } from "@/services/order.service";
import { revalidateTag } from "next/cache";

export const createPayPalOrderAction = async (orderData: OrderData) => {
  const result = await paymentService.createPayPalOrder(orderData);
  return result;
};

export const capturePayPalOrderAction = async (orderId: string) => {
  const result = await paymentService.capturePayPalOrder(orderId);
  revalidateTag("customer-orders", "max");
  revalidateTag("provider-orders", "max");
  revalidateTag("provider-stats", "max");
  return result;
};
