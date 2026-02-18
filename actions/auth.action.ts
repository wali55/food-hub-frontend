"use server"

import { authService, LoginData, RegisterData } from "@/services/auth.service";

export const register = async (registerData: RegisterData) => {
    const result = await authService.register(registerData);
    return result;
}

export const login = async (loginData: LoginData) => {
    const result = await authService.login(loginData);
    return result;
}
