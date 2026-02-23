"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setOrders } from "@/features/order/orderSlice";

export type Order = {
  id: string;
  status: string;
  deliveryType: string;
  totalPrice: string | number;
  deliveryAddress: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

const OrdersInitializer = ({ orders }: { orders: Order[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOrders(orders));
  }, [orders]);

  return <div></div>;
};

export default OrdersInitializer;
