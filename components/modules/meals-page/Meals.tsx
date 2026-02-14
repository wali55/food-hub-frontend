import MealCard from "./MealCard"

export type Meal = {
    id: string;
            title: string;
            description: string;
            price: string | number;
            dietaryPref: string;
            providerId: string;
            categoryId: string;
            createdAt: string;
            updatedAt: string;
            category: {
              title: string;
            },
            provider: {
              restaurantName: string;
            }
}

const Meals = ({limit, meals}: {limit?: number, meals: Meal[]}) => {
//  const meals = [
//     {
//         id: "1",
//         title: "Chicken Burger",
//         description: "Delicious chicken burger",
//         price: 150,
//         category: "Italian",
//         restaurantName: "Mirpur Restaurant"
//     },
//     {
//         id: "2",
//         title: "Chicken Burger",
//         description: "Delicious chicken burger",
//         price: 150,
//         category: "Italian",
//         restaurantName: "Mirpur Restaurant"
//     },
//     {
//         id: "3",
//         title: "Chicken Burger",
//         description: "Delicious chicken burger",
//         price: 150,
//         category: "Italian",
//         restaurantName: "Mirpur Restaurant"
//     },
//     {
//         id: "4",
//         title: "Chicken Burger",
//         description: "Delicious chicken burger",
//         price: 150,
//         category: "Italian",
//         restaurantName: "Mirpur Restaurant"
//     },
//  ]

 const displayedMeals = limit && meals ? meals.slice(0, limit) : meals;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals && displayedMeals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
        ))}
    </div>
  )
}

export default Meals