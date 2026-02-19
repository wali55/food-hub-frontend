"use client"

import { useAppSelector } from "@/hooks"
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const router = useRouter();
  const {mealItems, total} = useAppSelector((state) => state.cart);

  if (mealItems?.length === 0) {
    return <h1>No items on the cart</h1>
  }
  return (
    <div className="mt-10 flex flex-col gap-4">
        {mealItems && mealItems.map((mealItem) => (
            <CartItem key={mealItem.mealId} mealItem={mealItem}/>
        ))}
        <h1 className="text-xl font-semibold text-end">Total: ৳{total}</h1>
        <Button className="bg-[#FF5322]" onClick={() => router.push("/dashboard/checkout")}>Go to checkout</Button>
    </div>
  )
}

export default CartItems