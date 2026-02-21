"use client";

import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks";
import {
  ChartPie,
  ClipboardClock,
  Hamburger,
  SquareCheckBig,
} from "lucide-react";

const ProviderStatsCards = () => {
  const { providerStats } = useAppSelector((state) => state.provider);
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Meals</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{providerStats.totalMeals}</h2>
          <Hamburger />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Orders</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{providerStats.totalOrders}</h2>
          <ChartPie />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Placed Orders</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{providerStats.placedOrders}</h2>
        <ClipboardClock />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Delivered Orders</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{providerStats.deliveredOrders}</h2>
        <SquareCheckBig />
        </div>
      </div>
    </div>
  );
};

export default ProviderStatsCards;
