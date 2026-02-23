"use client";

import { createCategory } from "@/actions/category.action";
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
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const CreateCategoryDialog = () => {
  const [open, setOpen] = useState(false);

  const createCategorySchema = z.object({
    title: z.string().min(1, "Title name is required"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    validators: {
      onSubmit: createCategorySchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating category...");
      try {
        const { error } = await createCategory(value);
        if (error) {
          toast.error(error || "Failed to create category", {
            id: toastId,
          });
          return;
        }
        form.reset();
        setOpen(false);
        toast.success("Category created successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Failed to create category", {
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
          id="create-category-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Create category</DialogTitle>
            <DialogDescription>
              Create a category.
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
              form="create-category-form"
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

export default CreateCategoryDialog;
