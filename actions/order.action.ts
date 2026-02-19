"use server"

import { OrderData, orderService } from "@/services/order.service";

export const createOrder = async (orderData: OrderData) => {
    const result = await orderService.createOrder(orderData);
    return result;
}