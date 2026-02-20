"use server"

import { OrderData, orderService } from "@/services/order.service";
import { revalidateTag } from "next/cache";

export const createOrder = async (orderData: OrderData) => {
    const result = await orderService.createOrder(orderData);
    revalidateTag("customer-orders", "max");
    return result;
}

export const getCustomerOrders = async () => {
    const result = await orderService.getCustomerOrders();
    return result;
}

export const getOrderById = async (id: string) => {
    const result = await orderService.getOrderById(id);
    return result;
}