import { getProviderDetails } from "@/actions/provider.action";
import ProviderDetailsInitializer from "@/components/initializer/ProviderDetailsInitializer";
import ProviderDetails from "@/components/modules/provider-page/ProviderDetails";

const ProviderDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const {data: providerData} = await getProviderDetails(id);
  return (
    <div>
      <ProviderDetailsInitializer provider={providerData} />
      <h1 className="text-3xl text-[#FF5322] font-bold m-4">Provider Details</h1>
      <ProviderDetails />
    </div>
  );
};

export default ProviderDetailsPage;
