"use client";

import { ProviderMeal } from "@/components/initializer/ProviderMealsInitializer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import UpdateMealDialog from "../meals-page/UpdateMealDialog";

const ProviderMeals = () => {
  const { providerMeals } = useAppSelector((state) => state.meal);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Title</TableHead>
          <TableHead className="text-[#FF5322]">Dietary Pref.</TableHead>
          <TableHead className="text-[#FF5322]">Category</TableHead>
          <TableHead className="text-[#FF5322]">Price</TableHead>
          <TableHead className="text-[#FF5322]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {providerMeals &&
          providerMeals.length > 0 &&
          providerMeals?.map((meal: ProviderMeal) => (
            <TableRow key={meal.id}>
              <TableCell>{meal.title}</TableCell>
              <TableCell>{meal.dietaryPref}</TableCell>
              <TableCell>{meal.category.title}</TableCell>
              <TableCell>৳{meal.price}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateMealDialog mealId={meal.id} />
                <Button className="cursor-pointer" variant="destructive" size="xs">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ProviderMeals;
