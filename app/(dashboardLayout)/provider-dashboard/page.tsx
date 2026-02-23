import { getProviderStats } from "@/actions/provider.action";
import ProviderStatsInitializer from "@/components/initializer/ProviderStatsInitializer";
import ProviderStatsCards from "@/components/modules/provider-page/ProviderStatsCards";

const ProviderDashboardPage = async () => {
  const { data: providerStats } = await getProviderStats();
  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="text-[#FF5322] text-xl font-bold">Overview</h1>
      </div>
      <ProviderStatsInitializer providerStats={providerStats} />
      <ProviderStatsCards />
    </div>
  );
};

export default ProviderDashboardPage;
