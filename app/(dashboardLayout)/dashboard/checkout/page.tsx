import Checkout from "@/components/modules/customer-page/Checkout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CheckoutPage = () => {
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Checkout</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <Checkout />
    </div>
  )
}

export default CheckoutPage