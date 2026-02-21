"use client";

import { setCategories } from "@/features/category/categorySlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type Category = {
  id: string;
  title: string;
};

const CategoriesInitializer = ({ categories }: { categories: Category[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  return <div></div>;
};

export default CategoriesInitializer;
