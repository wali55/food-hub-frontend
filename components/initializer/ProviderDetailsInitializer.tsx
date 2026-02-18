"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setSelectedProvider } from "@/features/provider/providerSlice";

export type ProviderMeal = {
    id: string;
    title: string;
    description: string;
    dietaryPref: string;
    price: string;
    category: {
      title: string;
    };
    provider: {
      restaurantName: string;
    };
  }

export type ProviderDetails = {
  id: string;
  restaurantName: string;
  address: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  meals: ProviderMeal[];
};

const ProviderDetailsInitializer = ({ provider }: { provider: ProviderDetails }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedProvider(provider));
  }, [provider]);

  return <div></div>;
};

export default ProviderDetailsInitializer;
