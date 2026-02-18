"use server"

import { authService, RegisterData } from "@/services/auth.service";

export const register = async (registerData: RegisterData) => {
    const result = await authService.register(registerData);
    return result;
}
