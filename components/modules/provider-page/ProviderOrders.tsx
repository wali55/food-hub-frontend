"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import { ProviderOrder } from "@/components/initializer/ProviderOrdersInitializer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CancelOrderStatusAlert from "./CancelOrderStatusAlert";
import ChangeOrderStatusAlert from "./ChangeOrderStatusAlert";

const ProviderOrders = () => {
  const { orders } = useAppSelector((state) => state.order);

  const passStatus = (status: string) => {
    switch (status) {
      case "PLACED":
        return "PREPARING";
      case "PREPARING":
        return "READY";
      case "READY":
        return "DELIVERED";
      default:
        return "DELIVERED";
    }
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Created</TableHead>
          <TableHead className="text-[#FF5322]">Status</TableHead>
          <TableHead className="text-[#FF5322]">Delivery Type</TableHead>
          <TableHead className="text-[#FF5322]">Delivery Address</TableHead>
          <TableHead className="text-[#FF5322]">Total Price</TableHead>
          <TableHead className="text-[#FF5322]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders.length > 0 &&
          orders?.map((order: ProviderOrder) => (
            <TableRow key={order.id}>
              <TableCell>{order.createdAt.slice(0, 10)}</TableCell>
              <Badge
                asChild
                className={`text-[9px] ${order.status === "PLACED" ? "bg-blue-500" : order.status === "CANCELLED" ? "bg-red-500" : order.status === "PREPARING" ? "bg-orange-500" : order.status === "READY" ? "bg-purple-500" : order.status === "DELIVERED" ? "bg-green-500" : "bg-blue-500"}`}
              >
                <TableCell>{order.status}</TableCell>
              </Badge>
              <TableCell>{order.deliveryType}</TableCell>
              <TableCell>{order.deliveryAddress}</TableCell>
              <TableCell>৳{order.totalPrice}</TableCell>
              <TableCell className="flex gap-2">
                {(order.status !== "CANCELLED" && order.status !== "DELIVERED") && <ChangeOrderStatusAlert status={passStatus(order.status)} orderId={order.id} />}

                {(order.status === "PLACED") && <CancelOrderStatusAlert status="CANCELLED" orderId={order.id} />}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ProviderOrders;
