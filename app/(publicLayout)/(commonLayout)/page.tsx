import { getMeals } from "@/actions/meal.action";
import { getProviders } from "@/actions/provider.action";
import { Hero } from "@/components/modules/home-page/Hero";
import Meals from "@/components/modules/meals-page/Meals";
import Providers from "@/components/modules/provider-page/Providers";
import Reviews from "@/components/modules/reviews-page/Reviews";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = async () => {
  const {data: mealsData} = await getMeals();
  const {data: providersData} = await getProviders();

  return (
    <div>
      <Hero />
      <div className="p-4 mt-28">
        <div className="flex justify-between">

          <h1 className="py-4 text-2xl font-bold">Meals</h1>
          <Link href="/meals">
            <Button className="bg-[#FF5322] hover:bg-orange-500">View all</Button>
          </Link>
        </div>
        <Meals meals={mealsData} limit={3} />
      </div>

      <div className="p-4 mt-48">
        <div className="flex justify-between">

          <h1 className="py-4 text-2xl font-bold">Providers</h1>
          <Link href="/providers">
            <Button className="bg-[#FF5322] hover:bg-orange-500">View all</Button>
          </Link>
        </div>
        <Providers limit={3} providers={providersData} />
      </div>

      <div className="p-4 my-48">
        <div className="flex justify-between">

          <h1 className="py-4 text-2xl font-bold">Reviews</h1>
          <Link href="/reviews">
            <Button className="bg-[#FF5322] hover:bg-orange-500">View all</Button>
          </Link>
        </div>
        <Reviews limit={3} />
      </div>
    </div>
  )
}

export default HomePage;