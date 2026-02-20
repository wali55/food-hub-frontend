import { getCustomerOrders } from "@/actions/order.action";
import CustomerOrdersInitializer from "@/components/initializer/CustomerOrdersInitializer";
import CustomerOrders from "@/components/modules/customer-page/CustomerOrders";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrdersPage = async () => {
  const { data: ordersData } = await getCustomerOrders();
  return (
    <div className="w-full">
      <div className="flex justify-between p-4">
        <h1 className="text-[#FF5322] text-xl font-bold">My Orders</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <CustomerOrdersInitializer orders={ordersData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <CustomerOrders />
      </div>
    </div>
  );
};

export default OrdersPage;
