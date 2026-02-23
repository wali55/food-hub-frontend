"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setProviderProfile } from "@/features/provider/providerSlice";

export type ProviderProfile = {
  id: string;
  restaurantName: string;
  address: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
};

const ProviderProfileInitializer = ({
  providerProfile,
}: {
  providerProfile: ProviderProfile;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProviderProfile(providerProfile));
  }, [providerProfile]);

  return <div></div>;
};

export default ProviderProfileInitializer;
