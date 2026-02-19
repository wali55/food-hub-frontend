import CartItems from "@/components/modules/customer-page/CartItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Cart</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <CartItems />
    </div>
  );
};

export default CartPage;
