import { getMealItemById } from "@/actions/meal.action";
import MealItemDetailsInitializer from "@/components/initializer/MealItemDetailsInitializer";
import MealItemDetails from "@/components/modules/meals-page/MealItemDetails"

const MealDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const {data: mealData} = await getMealItemById(id);
  return (
    <div>
      <MealItemDetailsInitializer meal={mealData} />
      <h1 className="text-3xl text-[#FF5322] font-bold m-4">Meal Details</h1>
      <MealItemDetails />
    </div>
  )
}

export default MealDetailsPage