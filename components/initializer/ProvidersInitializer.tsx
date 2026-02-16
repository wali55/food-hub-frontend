"use client"

import { setProviders } from "@/features/provider/providerSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type Provider = {
  id: string;
  restaurantName: string;
  address: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

const ProvidersInitializer = ({providers}: {providers: Provider[]}) => {
     const dispatch = useAppDispatch();
    
     useEffect(() => {
        dispatch(setProviders(providers));
     }, [providers]);
    
  return (
    <div>ProvidersInitializer</div>
  )
}

export default ProvidersInitializer