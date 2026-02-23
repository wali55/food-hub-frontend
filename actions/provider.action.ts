"use server"

import { providerService } from "@/services/provider.service";

export const getProviders = async () => {
    const result = await providerService.getProviders();
    return result;
}

export const getProviderDetails = async (id: string) => {
    const result = await providerService.getProviderDetails(id);
    return result;
}

export const getProviderStats = async () => {
    const result = await providerService.getProviderStats();
    return result;
}

export const getCurrentProvider = async () => {
    const result = await providerService.getCurrentProvider();
    return result;
}