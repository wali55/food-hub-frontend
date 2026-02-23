"use client";

import { createProviderProfile } from "@/actions/provider.action";
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

const CreateProviderProfileDialog = () => {
  const [open, setOpen] = useState(false);

  const createProviderProfileSchema = z.object({
    restaurantName: z.string().min(1, "Restaurant name is required"),
    address: z.string().min(1, "Address is required"),
  });

  const form = useForm({
    defaultValues: {
      restaurantName: "",
      address: "",
    },
    validators: {
      onSubmit: createProviderProfileSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating provider restaurant...");
      try {
        const { error } = await createProviderProfile(value);
        if (error) {
          toast.error(error || "Failed to create provider restaurant", {
            id: toastId,
          });
          return;
        }
        form.reset();
        setOpen(false);
        toast.success("Provider restaurant created successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Failed to create provider restaurant", {
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
          id="create-profile-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Create provider restaurant</DialogTitle>
            <DialogDescription>
              Create a restaurant.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <form.Field
              name="restaurantName"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Restaurant Name</FieldLabel>
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
              name="address"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Address</FieldLabel>
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
              form="create-profile-form"
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

export default CreateProviderProfileDialog;
