"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks";

const OrderDetails = () => {
  const { selectedOrder: order } = useAppSelector((state) => state.order);
  const { status, totalPrice, deliveryAddress, deliveryType, createdAt } =
    order;
  return (
    <Card className="p-4 text-[#FF5322]">
      <div className="flex justify-between">
        <Badge
          className={`${status === "PLACED" ? "bg-blue-500" : status === "CANCELLED" ? "bg-red-500" : status === "PREPARING" ? "bg-orange-500" : status === "READY" ? "bg-purple-500" : status === "DELIVERED" ? "bg-green-500" : "bg-blue-500"}`}
        >
          {status}
        </Badge>
        <h2 className="text-lg font-semibold">৳{totalPrice}</h2>
      </div>
      <p className="text-sm">{deliveryAddress}</p>
      <div className="flex justify-between font-semibold">
        <p>Delivery: {deliveryType}</p>
        <p>Created: {createdAt.slice(0,10)}</p>
      </div>
    </Card>
  );
};

export default OrderDetails;
