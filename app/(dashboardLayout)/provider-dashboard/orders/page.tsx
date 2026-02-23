import { getProviderOrders } from "@/actions/order.action"
import ProviderOrdersInitializer from "@/components/initializer/ProviderOrdersInitializer";
import ProviderMeals from "@/components/modules/provider-page/ProviderMeals";
import ProviderOrders from "@/components/modules/provider-page/ProviderOrders";

const OrdersPage = async () => {
  const {data: providerOrders} = await getProviderOrders(); 
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Orders</h1>
      </div>
      <ProviderOrdersInitializer orders={providerOrders} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <ProviderOrders />
      </div>
    </div>
  )
}

export default OrdersPage