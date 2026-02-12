import MealCard from "./MealCard"

const Meals = () => {
 const meals = [
    {
        id: "1",
        title: "Chicken Burger",
        description: "Delicious chicken burger",
        price: 150,
        category: "Italian"
    },
    {
        id: "2",
        title: "Chicken Burger",
        description: "Delicious chicken burger",
        price: 150,
        category: "Italian"
    },
    {
        id: "3",
        title: "Chicken Burger",
        description: "Delicious chicken burger",
        price: 150,
        category: "Italian"
    },
    {
        id: "4",
        title: "Chicken Burger",
        description: "Delicious chicken burger",
        price: 150,
        category: "Italian"
    },
 ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.splice(0, 3).map((meal) => (
        <MealCard key={meal.id} meal={meal} />
        ))}
    </div>
  )
}

export default Meals