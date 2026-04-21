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

const Orders = () => {
  const { orders } = useAppSelector((state) => state.order);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Created</TableHead>
          <TableHead className="text-[#FF5322]">Order Status</TableHead>
          <TableHead className="text-[#FF5322]">Delivery Type</TableHead>
          <TableHead className="text-[#FF5322]">Delivery Address</TableHead>
          <TableHead className="text-[#FF5322]">Total Price</TableHead>
          <TableHead className="text-[#FF5322]">Payment Status</TableHead>
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
              {/* PENDING orange color
  COMPLETED green color
  FAILED red color */}
              <Badge
                asChild
                className={`text-[9px] ${order.paymentStatus === "COMPLETED" ? "bg-green-500" : order.paymentStatus === "PENDING" ? "bg-orange-500" : "bg-red-500"}`}
              >
                <TableCell>{order.paymentStatus}</TableCell>
              </Badge>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Orders;
