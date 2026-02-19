"use server"

import { authService, LoginData, RegisterData } from "@/services/auth.service";
import { cookies } from "next/headers";

export const register = async (registerData: RegisterData) => {
    const result = await authService.register(registerData);
    return result;
}

export const login = async (loginData: LoginData) => {
    const result = await authService.login(loginData);

    if (result.data?.token) {
        const cookieStore = await cookies(); 
        
        cookieStore.set("token", result.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", 
            path: "/",
            maxAge: 60 * 60, 
        });
    }

    return result;
}

export const logout = async () => {
    const result = await authService.logout();
    if (result.data) {
        const cookieStore = await cookies(); 
        cookieStore.delete("token");
    }
    return result;
}
