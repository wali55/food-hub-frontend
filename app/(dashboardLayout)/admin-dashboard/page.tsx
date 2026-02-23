import { getAdminStats } from "@/actions/admin.action"
import AdminStatsInitializer from "@/components/initializer/AdminStatsInitializer";
import AdminStatsCards from "@/components/modules/admin-page/AdminStatsCards";

const AdminDashboardPage = async () => {
  const {data: adminStatsData} = await getAdminStats();
  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="text-[#FF5322] text-xl font-bold">Overview</h1>
      </div>
      <AdminStatsInitializer adminStats={adminStatsData} />
      <AdminStatsCards />
    </div>
  )
}

export default AdminDashboardPage