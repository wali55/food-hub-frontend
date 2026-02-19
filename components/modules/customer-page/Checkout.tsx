"use client"

import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { setDeliveryAddress } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useEffect, useState } from "react";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState("");
  const {total, mealItems} = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setDeliveryAddress(address));
  }, [address]);

  const handlePlaceOrder = () => {

  }

  if (mealItems?.length === 0) {
    return <h1>No items on the cart</h1>
  }

  return (
    <div className="mt-4">
        <h1 className="mb-8">Total: ৳{total}</h1>

        <form className="mb-6">
            <FieldGroup>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Textarea id="address" onChange={(e) => setAddress(e.target.value)} />
            </FieldGroup>
        </form>
        <Button className="bg-[#FF5322]" onClick={handlePlaceOrder}>Place order</Button>
    </div>
  )
}

export default Checkout