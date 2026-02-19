"use client";

import { Meal } from "@/components/initializer/MealsInitializer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/navigation";

const MealCard = ({ meal }: { meal: Meal }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleAddCart = () => {
    dispatch(addCart({ mealId: meal.id, quantity: 1, meal, mealPrice: meal.price }));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#FF5322]">{meal.title}</CardTitle>
        <CardDescription className="text-[#FF5322]">
          {meal.description}
        </CardDescription>
        <h3 className="text-[#FF5322] font-medium">
          {meal.provider.restaurantName}
        </h3>
      </CardHeader>
      <CardContent className="flex justify-between">
        <h3 className="text-[#FF5322] font-medium text-lg">৳{meal.price}</h3>
        <h3 className="text-[#FF5322] font-medium text-lg">
          {meal.category.title}
        </h3>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          onClick={() => router.push(`/meals/${meal.id}`)}
          className="text-[#FF5322] border border-[#FF5322] bg-white hover:bg-orange-500 hover:text-white"
        >
          Details
        </Button>
        <Button
          onClick={handleAddCart}
          className="bg-[#FF5322] hover:bg-orange-500"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
