import { getCategories } from "@/actions/category.action";
import { getProviderMeals } from "@/actions/meal.action";
import CategoriesInitializer from "@/components/initializer/CategoriesInitializer";
import ProviderMealsInitializer from "@/components/initializer/ProviderMealsInitializer";
import CreateMealDialog from "@/components/modules/meals-page/CreateMealDialog";
import ProviderMeals from "@/components/modules/provider-page/ProviderMeals";
import { Button } from "@/components/ui/button";

const MealsPage = async () => {
  const { data: providerMeals } = await getProviderMeals();
  const {data: categoriesData} = await getCategories();
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Restaurant Meals</h1>
        <CreateMealDialog />
      </div>
      <ProviderMealsInitializer providerMeals={providerMeals} />
      <CategoriesInitializer categories={categoriesData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <ProviderMeals />
      </div>
    </div>
  );
};

export default MealsPage;
