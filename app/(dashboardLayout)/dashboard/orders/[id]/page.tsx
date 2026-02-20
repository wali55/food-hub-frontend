import { getOrderById } from "@/actions/order.action";
import OrderDetailsInitializer from "@/components/initializer/OrderDetailsInitializer";
import OrderDetails from "@/components/modules/customer-page/OrderDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: orderData } = await getOrderById(id);
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Cart</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <OrderDetailsInitializer order={orderData} />
      <div className="my-4 max-w-2xl">
        <OrderDetails />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
