import { Button } from "@/components/ui/button";
import Link from "next/link";
import PaymentView from "@/components/modules/customer-page/Payment";

const PaymentPage = () => {
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#FF5322] text-xl font-bold">Payment</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Cancel Payment</Link>
        </Button>
      </div>
      <div className="my-4 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <PaymentView />
      </div>
    </div>
  );
};

export default PaymentPage;