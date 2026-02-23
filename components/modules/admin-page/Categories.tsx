"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import { Category } from "@/components/initializer/CategoriesInitializer";
import UpdateCategoryDialog from "./UpdateCategoryDialog";
import DeleteCategoryAlert from "./DeleteCategoryAlert";

const Categories = () => {
  const { categories } = useAppSelector((state) => state.category);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FF5322]">Title</TableHead>
          <TableHead className="text-[#FF5322]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories &&
          categories.length > 0 &&
          categories?.map((category: Category) => (
            <TableRow key={category.id}>
              <TableCell>{category.title}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateCategoryDialog categoryId={category.id} />
                <DeleteCategoryAlert categoryId={category.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Categories;
