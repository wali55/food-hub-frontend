"use client";

import { setAdminStats } from "@/features/admin/adminSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type AdminStats = {
  totalUsers: number;
  totalOrders: number;
  totalMeals: number;
  totalCategories: number;
};

const AdminStatsInitializer = ({ adminStats }: { adminStats: AdminStats }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAdminStats(adminStats));
  }, [adminStats]);

  return <div></div>;
};

export default AdminStatsInitializer;
