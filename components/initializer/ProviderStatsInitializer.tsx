"use client";

import {
  setProviderStats,
} from "@/features/provider/providerSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type ProviderStats = {
  totalMeals: number;
  totalOrders: number;
  placedOrders: number;
  deliveredOrders: number;
};

const ProviderStatsInitializer = ({
  providerStats,
}: {
  providerStats: ProviderStats[];
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProviderStats(providerStats));
  }, [providerStats]);

  return <div></div>;
};

export default ProviderStatsInitializer;
