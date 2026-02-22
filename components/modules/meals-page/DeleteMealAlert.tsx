"use client"

import { deleteMeal } from "@/actions/meal.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const DeleteMealAlert = ({ mealId }: { mealId: string }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting meal...");
    try {
      const { error } = await deleteMeal(mealId);
      if (error) {
        console.log(error)
        toast.error(error || "Failed to delete meal", {
          id: toastId,
        });
        return;
      }
      toast.success("Meal deleted successfully.", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      toast.error(error || "Failed to delete meal", {
        id: toastId,
      });
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="cursor-pointer"
          variant="destructive"
          size="xs"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this meal?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMealAlert;
