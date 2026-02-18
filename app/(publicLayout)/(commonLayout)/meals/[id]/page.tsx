import { getMealItemById } from "@/actions/meal.action";
import MealItemDetailsInitializer from "@/components/initializer/MealItemDetailsInitializer";
import MealItemDetails from "@/components/modules/meals-page/MealItemDetails"

const MealDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const {data: mealData} = await getMealItemById(id);
  // const meal = {
  //       id: "0ab6b126-f586-44a0-9ae9-5978ba0836f8",
  //       title: "Chicken Pizza",
  //       description: "Delicious chicken pizza",
  //       price: "150.5",
  //       dietaryPref: "ALL",
  //       providerId: "8e6a63f7-2e26-401e-93b3-98faed485b3e",
  //       categoryId: "d917c450-83b6-4f23-b739-722e75576c81",
  //       createdAt: "2026-02-11T08:46:25.001Z",
  //       updatedAt: "2026-02-11T08:46:25.001Z",
  //       category: {
  //           title: "Italian"
  //       },
  //       "provider": {
  //           restaurantName: "Mirpur Restaurant"
  //       }
  //   }
  return (
    <div>
      <MealItemDetailsInitializer meal={mealData} />
      <MealItemDetails />
    </div>
  )
}

export default MealDetailsPage