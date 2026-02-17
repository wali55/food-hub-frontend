import { Meal } from "@/components/initializer/MealsInitializer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const MealCard = ({meal}: {meal: Meal}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-[#FF5322]">{meal.title}</CardTitle>
            <CardDescription className="text-[#FF5322]">{meal.description}</CardDescription>
            <h3 className="text-[#FF5322] font-medium">{meal.provider.restaurantName}</h3>
        </CardHeader>
        <CardContent className="flex justify-between">
            <h3 className="text-[#FF5322] font-medium text-lg">৳{meal.price}</h3>
            <h3 className="text-[#FF5322] font-medium text-lg">{meal.category.title}</h3>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button className="bg-[#FF5322] hover:bg-orange-500">Add to cart</Button>
        </CardFooter>
    </Card>
  )
}

export default MealCard