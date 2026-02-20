import { getCustomerOrders } from "@/actions/order.action";
import CustomerOrdersInitializer from "@/components/initializer/CustomerOrdersInitializer";
import CustomerOrders from "@/components/modules/customer-page/CustomerOrders";

const OrdersPage = async () => {
  const { data: ordersData } = await getCustomerOrders();
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold m-4">My Orders</h1>
      <CustomerOrdersInitializer orders={ordersData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <CustomerOrders />
      </div>
    </div>
  );
};

export default OrdersPage;
