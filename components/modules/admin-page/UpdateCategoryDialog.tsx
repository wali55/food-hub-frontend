"use client";

import { updateCategory } from "@/actions/category.action";
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
import { useAppSelector } from "@/hooks";
import { useForm } from "@tanstack/react-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const UpdateCategoryDialog = ({categoryId}: {categoryId: string}) => {
  const [selectedCategory, setSelectedCategory] = useState({id: "", title: ""});
  const [open, setOpen] = useState(false);
  const {categories} = useAppSelector((state) => state.category);

  useEffect(() => {
      const category = categories.find(
        (category) => (category as {id: string; title: string}).id === categoryId,
      );
      if (category) {
        setSelectedCategory(category);
      }
    }, [categories, categoryId]);

  const createCategorySchema = z.object({
    title: z.string().min(1, "Title name is required"),
  });

  const form = useForm({
    defaultValues: {
      title: selectedCategory?.title || "",
    },
    validators: {
      onSubmit: createCategorySchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Updating category...");
      try {
        const { error } = await updateCategory(value, categoryId);
        if (error) {
          toast.error(error || "Failed to update category", {
            id: toastId,
          });
          return;
        }
        form.reset();
        setOpen(false);
        toast.success("Category updated successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Failed to update category", {
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
          id="edit-category-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit category</DialogTitle>
            <DialogDescription>
              Edit a category.
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
          </FieldGroup>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button onClick={() => setOpen(false)} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              form="edit-category-form"
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

export default UpdateCategoryDialog;
