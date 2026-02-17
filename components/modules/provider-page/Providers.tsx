"use client"

import { useAppSelector } from "@/hooks";
import ProviderCard from "./ProviderCard";
import { Provider } from "@/components/initializer/ProvidersInitializer";

const Providers = ({ limit}: { limit?: number}) => {

  const {providers} = useAppSelector((state) => state.provider)

  const displayedProviders = limit && providers?.length ? providers.slice(0, 3) : providers;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {providers?.length && displayedProviders?.map((provider) => (
        <ProviderCard key={(provider as Provider).id} provider={provider} />
      ))}
    </div>
  );
};

export default Providers;
