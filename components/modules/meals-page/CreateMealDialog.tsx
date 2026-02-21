"use client";

import { createMeal } from "@/actions/meal.action";
import { Category } from "@/components/initializer/CategoriesInitializer";
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
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const CreateMealDialog = () => {
  const [open, setOpen] = useState(false);
  const { categories } = useAppSelector((state) => state.category);

  const createMealSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(1, "Price is required"),
    dietaryPref: z.string().min(1, "Dietary Preference is required"),
    categoryId: z.string().min(1, "Category is required"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      dietaryPref: "",
      categoryId: "",
    },
    validators: {
      onSubmit: createMealSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating meal...");
      try {
        const { error } = await createMeal(value);
        if (error) {
          toast.error(error?.message || "Failed to create meal", {
            id: toastId,
          });
          return;
        }
        setOpen(false);
        toast.success("Meal created successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error?.message || "Failed to create meal", {
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
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form
          id="create-meal-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Create Meal</DialogTitle>
            <DialogDescription>
              Create a meal for your restaurant.
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
              form="create-meal-form"
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

export default CreateMealDialog;
