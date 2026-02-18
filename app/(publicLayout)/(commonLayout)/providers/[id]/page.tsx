import { getProviderDetails } from "@/actions/provider.action";
import ProviderDetailsInitializer from "@/components/initializer/ProviderDetailsInitializer";
import ProviderDetails from "@/components/modules/provider-page/ProviderDetails";

const ProviderDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const {data: providerData} = await getProviderDetails(id);
  return (
    <div>
      <ProviderDetailsInitializer provider={providerData} />
      <ProviderDetails />
    </div>
  );
};

export default ProviderDetailsPage;
