"use client";

import { CustomerOrder } from "@/components/initializer/CustomerOrdersInitializer";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";

const CustomerOrders = () => {
  const { orders } = useAppSelector((state) => state.order);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Created</TableHead>
          <TableHead className="text-[#FF5322]">Status</TableHead>
          <TableHead className="text-[#FF5322]">Delivery Type</TableHead>
          <TableHead className="text-[#FF5322]">Total Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders.length > 0 &&
          orders?.map((order: CustomerOrder) => (
            <TableRow key={order.id}>
              <TableCell>{order.createdAt.slice(0, 10)}</TableCell>
              <Badge
                asChild
                className={`text-[9px] ${order.status === "PLACED" ? "bg-blue-500" : order.status === "CANCELLED" ? "bg-red-500" : order.status === "PREPARING" ? "bg-orange-500" : order.status === "READY" ? "bg-purple-500" : order.status === "DELIVERED" ? "bg-green-500" : "bg-blue-500"}`}
              >
                <TableCell>{order.status}</TableCell>
              </Badge>
              <TableCell>{order.deliveryType}</TableCell>
              <TableCell>৳{order.totalPrice}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default CustomerOrders;
