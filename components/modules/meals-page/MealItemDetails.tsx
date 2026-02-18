"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks";

const MealItemDetails = () => {
    const {selectedMeal: meal} = useAppSelector((state) => state.meal);
  return (
    <Card className="mx-4 my-10 p-4 max-w-3xl text-[#FF5322]">
      <h2 className="font-bold text-3xl">{meal.title}</h2>
      <p className="text-sm">{meal.description}</p>
      <div className="block md:flex justify-between">
        <p>
          <span className="font-medium">Category:</span> {meal.category.title}
        </p>
        <p>
          <span className="font-medium">Dietary Preference:</span>{" "}
          {meal.dietaryPref}
        </p>
      </div>
      <div className="block md:flex justify-between font-semibold text-lg">
        <p>{meal.provider.restaurantName}</p>
        <p>৳{meal.price}</p>
      </div>
      <div className="flex justify-end">

      <Button className="bg-[#FF5322] hover:bg-orange-500 w-fit">Add to cart</Button>
      </div>
    </Card>
  );
};

export default MealItemDetails;
