import { Hero } from "@/components/modules/home-page/Hero";
import Meals from "@/components/modules/meals-page/Meals";
import Providers from "@/components/modules/provider-page/Providers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="p-4 mt-48">
        <div className="flex justify-between">

          <h1 className="py-4 text-2xl font-bold">Meals</h1>
          <Link href="/meals">
            <Button className="bg-[#FF5322]">View all</Button>
          </Link>
        </div>
        <Meals />
      </div>

      <div className="p-4 mt-48">
        <div className="flex justify-between">

          <h1 className="py-4 text-2xl font-bold">Providers</h1>
          <Link href="/providers">
            <Button className="bg-[#FF5322]">View all</Button>
          </Link>
        </div>
        <Providers />
      </div>
    </div>
  )
}

export default HomePage;