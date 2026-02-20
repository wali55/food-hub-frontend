"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { CustomerOrder } from "./CustomerOrdersInitializer";
import { setSelectedOrder } from "@/features/order/orderSlice";

const OrderDetailsInitializer = ({ order }: { order: CustomerOrder }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedOrder(order));
  }, [order]);

  return <div></div>;
};

export default OrderDetailsInitializer;
