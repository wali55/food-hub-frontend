import { getCategories } from "@/actions/category.action";
import CategoriesInitializer from "@/components/initializer/CategoriesInitializer";
import Categories from "@/components/modules/admin-page/Categories";
import CreateCategoryDialog from "@/components/modules/admin-page/CreateCategoryDialog";

const CategoriesPage = async () => {
  const {data: categoriesData} = await getCategories(); 
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Categories</h1>
        <CreateCategoryDialog />
      </div>
      <CategoriesInitializer categories={categoriesData} />
      <div className="m-4 border border-neutral-200 rounded-md">
        <Categories />
      </div>
    </div>
  );
};

export default CategoriesPage;
