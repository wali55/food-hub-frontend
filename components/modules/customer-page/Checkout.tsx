"use client";

import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { setDeliveryAddress } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState("");
  const { total, mealItems, deliveryAddress } = useAppSelector(
    (state) => state.cart,
  );

  useEffect(() => {
    dispatch(setDeliveryAddress(address));
  }, [address]);

  const handleProceedToPayment = () => {
    if (!deliveryAddress) {
      toast.error("Please enter a delivery address.");
      return;
    }
    router.push("/dashboard/payment");
  };

  if (mealItems?.length === 0) {
    return <h1>No items on the cart</h1>;
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
      <Button className="bg-[#FF5322]" onClick={handleProceedToPayment}>
        Proceed to Payment
      </Button>
    </div>
  );
};

export default Checkout;
