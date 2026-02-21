import { getProviderStats } from "@/actions/provider.action"
import ProviderStatsInitializer from "@/components/initializer/ProviderStatsInitializer";
import ProviderStatsCards from "@/components/modules/provider-page/ProviderStatsCards";

const ProviderDashboardPage = async () => {
  const {data: providerStats} = await getProviderStats();
  return (
    <div className="w-full">
      <ProviderStatsInitializer providerStats={providerStats} />
      <ProviderStatsCards />
    </div>
  )
}

export default ProviderDashboardPage