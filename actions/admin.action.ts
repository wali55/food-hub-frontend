"use server"

import { adminService, UpdateUserStatus } from "@/services/admin.service";
import { revalidateTag } from "next/cache";

export const getAdminStats = async () => {
    const result = await adminService.getAdminStats();
    return result;
}

export const getAllUsers = async () => {
    const result = await adminService.getAllUsers();
    return result;
}

export const updateUserStatus = async (user: UpdateUserStatus, userId: string) => {
    const result = await adminService.updateUserStatus(user, userId);
    revalidateTag("users", "max");
    return result;
}

export const getAllOrders = async () => {
    const result = await adminService.getAllOrders();
    return result;
}