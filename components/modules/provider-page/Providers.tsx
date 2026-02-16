import ProviderCard from "./ProviderCard";

export type Provider = {
  id: string;
  restaurantName: string;
  address: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

const Providers = ({ limit, providers }: { limit?: number; providers: Provider[] }) => {
  //     const providers = [
  //     {
  //         id: "1",
  //         restaurantName: "Mirpur Restaurant",
  //         address: "Mirpur Dhaka"
  //     },
  //     {
  //         id: "2",
  //         restaurantName: "Mirpur Restaurant",
  //         address: "Mirpur Dhaka"
  //     },
  //     {
  //         id: "3",
  //         restaurantName: "Mirpur Restaurant",
  //         address: "Mirpur Dhaka"
  //     },
  //     {
  //         id: "4",
  //         restaurantName: "Mirpur Restaurant",
  //         address: "Mirpur Dhaka"
  //     }
  //  ]

  const displayedProviders = limit && providers?.length ? providers.slice(0, 3) : providers;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedProviders.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default Providers;
