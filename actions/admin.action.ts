"use server"

import { adminService } from "@/services/admin.service";

export const getAdminStats = async () => {
    const result = await adminService.getAdminStats();
    return result;
}