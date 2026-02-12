import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type MealProps = {
    title: string;
    description: string;
    price: number | string;
    category: string;
}

const MealCard = ({meal}: {meal: MealProps}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-[#FF5322]">{meal.title}</CardTitle>
            <CardDescription className="text-[#FF5322]">{meal.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
            <h3 className="text-[#FF5322] font-medium text-lg">{meal.price}</h3>
            <h3 className="text-[#FF5322] font-medium text-lg">{meal.category}</h3>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button className="bg-[#FF5322]">Add to cart</Button>
        </CardFooter>
    </Card>
  )
}

export default MealCard