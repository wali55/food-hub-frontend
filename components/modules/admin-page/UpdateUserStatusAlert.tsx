"use client"

import { updateUserStatus } from "@/actions/admin.action";
import { updateOrderStatus } from "@/actions/order.action";
import { User } from "@/components/initializer/UsersInitializer";
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

const UpdateUserStatusAlert = ({ isActive, user }: { isActive: boolean, user: User }) => {
  const [open, setOpen] = useState(false);

  const handleStatusChange = async () => {
    const toastId = toast.loading("Changing user status...");
    try {
      const { error } = await updateUserStatus({isActive}, user.id);
      if (error) {
        toast.error(error || "Failed to update user status", {
          id: toastId,
        });
        return;
      }
      toast.success("User status updated successfully.", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      toast.error(error || "Failed to update user status", {
        id: toastId,
      });
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className={`${user.isActive ? "bg-red-500" : "bg-green-500"}`} size="xs">{user.isActive ? "Deactivate" : "Activate"}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to mark {user.isActive ? "inactive" : "active"} this user?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            CLOSE
          </AlertDialogCancel>
          <AlertDialogAction size="sm" onClick={handleStatusChange}>{user.isActive ? "Deactivate" : "Activate"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateUserStatusAlert;
