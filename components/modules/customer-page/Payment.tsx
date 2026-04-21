"use client";

import { capturePayPalOrderAction, createPayPalOrderAction } from "@/actions/payment.action";
import { clearCart, setReviewDialogOpen } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PaymentView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { total, mealItems, deliveryAddress } = useAppSelector(
    (state) => state.cart,
  );

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!paypalClientId) {
    return <div>Error: PayPal Client ID is missing.</div>;
  }

  if (mealItems?.length === 0) {
    return <div>No items in cart. Please add items and checkout first.</div>;
  }

  const initialOptions = {
    clientId: paypalClientId,
    currency: "USD",
    intent: "capture",
  };

  const createOrderForPaypal = async () => {
    const payload = {
      mealItems: mealItems.map((mealItem) => ({
        mealId: mealItem.mealId,
        quantity: mealItem.quantity,
      })),
      deliveryAddress,
    };
    console.log("Payload being sent:", JSON.stringify(payload, null, 2));

    const { data, error } = await createPayPalOrderAction(payload);
    console.log("Response:", { data, error });

    if (error) {
      toast.error(error?.message || error || "Failed to initiate PayPal checkout.");
      throw new Error(typeof error === "string" ? error : error?.message);
    }

    return data.paypalOrder.id;
  };

  const onApprovePaypal = async (data: any) => {
    const toastId = toast.loading("Capturing payment...");

    const { data: captureData, error } = await capturePayPalOrderAction(data.orderID);

    if (error) {
      toast.error(error?.message || error || "Error occurred when capturing payment!", { id: toastId });
      return;
    }

    dispatch(clearCart());
    dispatch(setReviewDialogOpen(true));
    toast.success("Payment successful! Redirecting...", { id: toastId });
    router.push("/dashboard/review");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-4 text-xl font-semibold">Complete your payment</h2>
      <div className="mb-6 text-center">
        <p>Total amount: ৳{total}</p>
      </div>
      <div className="w-full max-w-sm z-0">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ layout: "vertical", shape: "rect" }}
            createOrder={createOrderForPaypal}
            onApprove={onApprovePaypal}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PaymentView;

