"use client";

import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setProfile } from "@/features/customerProfile/customerProfileSlice";

export type CustomerProfile = {
  id: string;
        name: string;
        email: string;
        phone: string;
        isActive: true,
        address: string;
        role: string;
        createdAt: string;
        updatedAt: string;
        provider: null
};

const CustomerProfileInitializer = ({ profile }: { profile: CustomerProfile }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProfile(profile));
  }, [profile]);

  return <div></div>;
};

export default CustomerProfileInitializer;