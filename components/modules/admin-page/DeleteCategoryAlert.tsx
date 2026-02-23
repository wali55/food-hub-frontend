"use client"

import { deleteCategory } from "@/actions/category.action";
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

const DeleteCategoryAlert = ({ categoryId }: { categoryId: string }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting category...");
    try {
      const { error } = await deleteCategory(categoryId);
      if (error) {
        toast.error(error || "Failed to delete category", {
          id: toastId,
        });
        return;
      }
      toast.success("Category deleted successfully.", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      toast.error(error || "Failed to delete category", {
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
            Are you sure you want to delete this category?
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

export default DeleteCategoryAlert;
