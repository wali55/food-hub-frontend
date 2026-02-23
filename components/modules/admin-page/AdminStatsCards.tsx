"use client";

import { useAppSelector } from "@/hooks";
import {
  ChartPie,
  ClipboardClock,
  Hamburger,
  SquareCheckBig,
  UserRound,
} from "lucide-react";

const AdminStatsCards = () => {
  const { stats } = useAppSelector((state) => state.admin);
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Users</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{stats.totalUsers}</h2>
          <UserRound />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Orders</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{stats.totalOrders}</h2>
          <ChartPie />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Meals</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{stats.totalMeals}</h2>
        <Hamburger />
        </div>
      </div>
      <div className="p-4 text-[#FF5322] border rounded-md">
        <h2>Total Categories</h2>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">{stats.totalCategories}</h2>
        <SquareCheckBig />
        </div>
      </div>
    </div>
  );
};

export default AdminStatsCards;
