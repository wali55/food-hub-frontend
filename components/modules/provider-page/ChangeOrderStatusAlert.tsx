"use client"

import { updateOrderStatus } from "@/actions/order.action";
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

const ChangeOrderStatusAlert = ({ status, orderId }: { status: string, orderId: string }) => {
  const [open, setOpen] = useState(false);

  const handleStatusChange = async () => {
    const toastId = toast.loading("Changing order status...");
    try {
      const { error } = await updateOrderStatus({status}, orderId);
      if (error) {
        toast.error(error || "Failed to update order status", {
          id: toastId,
        });
        return;
      }
      toast.success("Order status updated successfully.", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      toast.error(error || "Failed to update order status", {
        id: toastId,
      });
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className={`${status === "PLACED" ? "bg-orange-500"  : status === "PREPARING" ? "bg-purple-500" : status === "READY" ? "bg-lime-500" : "bg-green-500"}`} size="xs">{status}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to mark {status} this order?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            CLOSE
          </AlertDialogCancel>
          <AlertDialogAction size="sm" variant="destructive" onClick={handleStatusChange}>{status}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ChangeOrderStatusAlert;
