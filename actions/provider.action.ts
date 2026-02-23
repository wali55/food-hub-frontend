"use server"

import { CreateProviderProfile, providerService } from "@/services/provider.service";
import { revalidateTag } from "next/cache";

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

export const createProviderProfile = async (profile: CreateProviderProfile) => {
    const result = await providerService.createProviderProfile(profile);
    revalidateTag("current-provider", "max");
    return result;
}