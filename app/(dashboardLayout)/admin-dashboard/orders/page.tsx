import { getAllOrders } from "@/actions/admin.action"
import OrdersInitializer from "@/components/initializer/OrdersInitializer";
import Orders from "@/components/modules/admin-page/Orders";

const OrdersPage = async () => {
  const {data: ordersData} = await getAllOrders();
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Orders</h1>
      </div>
      <OrdersInitializer orders={ordersData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <Orders />
      </div>
    </div>
  )
}

export default OrdersPage