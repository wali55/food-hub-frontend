"use server"

import { providerService } from "@/services/provider.service";

export const getProviders = async () => {
    const result = await providerService.getProviders();
    return result;
}