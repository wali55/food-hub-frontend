import { ProviderMeal } from "@/components/initializer/ProviderDetailsInitializer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ProviderDetailsMeals = ({meal}: {meal: ProviderMeal}) => {
  return (
     <Card>
        <CardHeader>
            <CardTitle className="text-[#FF5322]">{meal.title}</CardTitle>
            <CardDescription className="text-[#FF5322]">{meal.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
            <h3 className="text-[#FF5322] text-lg"><span className="font-medium">Dietary Pref:</span> {meal.dietaryPref}</h3>
        </CardContent>
        <CardContent className="flex justify-between">
            <h3 className="text-[#FF5322] font-medium text-lg">৳{meal.price}</h3>
            <h3 className="text-[#FF5322] text-lg"> <span className="font-medium">Category:</span> {meal.category.title}</h3>
        </CardContent>
    </Card>
  )
}

export default ProviderDetailsMeals