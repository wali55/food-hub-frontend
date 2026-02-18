"use client"

import { Card } from "@/components/ui/card"
import { useAppSelector } from "@/hooks"
import ProviderDetailsMeals from "./ProviderDetailsMeals"
import { ProviderMeal } from "@/components/initializer/ProviderDetailsInitializer"

const ProviderDetails = () => {
  const {selectedProvider: provider} = useAppSelector((state) => state.provider);

  return (
    <Card className="mx-4 my-10 p-4 max-w-3xl text-[#FF5322]">
      <h2 className="font-bold text-3xl">{provider.restaurantName}</h2>
      <p className="text-sm">{provider.address}</p>
      {provider?.meals && provider?.meals.map((meal) => (
        <ProviderDetailsMeals key={(meal as ProviderMeal).id} meal={meal} />
      ))}
    </Card>
  )
}

export default ProviderDetails