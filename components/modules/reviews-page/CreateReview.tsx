"use client";

import { createReview } from "@/actions/review.action";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as z from "zod";

const CreateReview = () => {
const router = useRouter();
  const createReviewSchema = z.object({
    content: z.string().min(1, "Content is required"),
  });

  const form = useForm({
    defaultValues: {
      content: "",
    },
    validators: {
      onSubmit: createReviewSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating review...");
      try {
        const { error } = await createReview(value);
        if (error) {
          toast.error(error || "Failed to create review", {
            id: toastId,
          });
          return;
        }
        form.reset();
        router.push("/dashboard/orders")
        toast.success("Review created successfully.", { id: toastId });
      } catch (error: any) {
        toast.error(error || "Failed to create review", {
          id: toastId,
        });
      }
    },
  });

  return (
    <div>
      <div className="sm:max-w-sm">
        <form
          id="create-review-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div>
            <div className="text-lg font-semibold">Create review</div>
            <div className="my-2 pb-6">
              Create a review.
            </div>
          </div>
          <FieldGroup>
            <form.Field
              name="content"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>
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
          <div className="mt-4">
            <Button
              type="submit"
              form="create-review-form"
              className="bg-[#FF5322] hover:bg-orange-500 cursor-pointer"
            >
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
