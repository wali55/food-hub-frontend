"use client";

import { updateMeal } from "@/actions/meal.action";
import { Category } from "@/components/initializer/CategoriesInitializer";
import { ProviderMeal } from "@/components/initializer/ProviderMealsInitializer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks";
import { useForm } from "@tanstack/react-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const UpdateMealDialog = ({mealId}: {mealId: string}) => {
  const initialMeal = {
    id: "",
    title: "",
    description: "",
    price: 0,
    dietaryPref: "",
    providerId: "",
    categoryId: "",
    createdAt: "",
    updatedAt: "",
    category: {
      title: "",
    },
  };
  const [selectedMeal, setSelectedMeal] = useState(initialMeal);
  const [open, setOpen] = useState(false);
  const { categories } = useAppSelector((state) => state.category);
  const { providerMeals } = useAppSelector((state) => state.meal);

  useEffect(() => {
    const meal = providerMeals.find(
      (providerMeal) => (providerMeal as ProviderMeal).id === mealId,
    );
    if (meal) {
      setSelectedMeal(meal);
    }
  }, [providerMeals, mealId]);

  const updateMealSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    dietaryPref: z.string(),
    categoryId: z.string(),
  });

  const form = useForm({
    defaultValues: {
      title: selectedMeal?.title || "",
      description: selectedMeal?.description || "",
      price: Number(selectedMeal?.price) || 0,
      dietaryPref: selectedMeal?.dietaryPref || "",
      categoryId: selectedMeal?.categoryId || "",
    },
    validators: {
      onSubmit: updateMealSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Updating meal...");
      try {
        const { error } = await updateMeal(value, mealId);
        if (error) {
          toast.error(error || "Failed to update meal", {
            id: toastId,
          });
          return;
        }
        setOpen(false);
        toast.success("Meal updated successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Failed to update meal", {
          id: toastId,
        });
      }
    },
  });

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#FF5322] hover:bg-orange-500 cursor-pointer"
          size="xs"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form
          id="update-meal-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit Meal</DialogTitle>
            <DialogDescription>
              Edit a meal 
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                    <Input
                      type="number"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="dietaryPref"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Dietary Pref.</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id="select-dietary-pref"
                        aria-invalid={isInvalid}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectSeparator />
                        <SelectItem key="ALL" value="ALL">
                          All
                        </SelectItem>
                        <SelectItem key="VEGETARIAN" value="VEGETARIAN">
                          Vegetarian
                        </SelectItem>
                        <SelectItem key="VEGAN" value="VEGAN">
                          Vegan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="categoryId"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Category</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id="select-dietary-pref"
                        aria-invalid={isInvalid}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectSeparator />
                        {categories.map((category: Category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button onClick={() => setOpen(false)} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              form="update-meal-form"
              className="bg-[#FF5322] hover:bg-orange-500 cursor-pointer"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateMealDialog;
