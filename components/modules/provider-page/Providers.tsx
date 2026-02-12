import ProviderCard from "./ProviderCard"

const Providers = () => {
    const providers = [
    {
        id: "1",
        restaurantName: "Mirpur Restaurant",
        address: "Mirpur Dhaka"
    },
    {
        id: "2",
        restaurantName: "Mirpur Restaurant",
        address: "Mirpur Dhaka"
    },
    {
        id: "3",
        restaurantName: "Mirpur Restaurant",
        address: "Mirpur Dhaka"
    },
    {
        id: "4",
        restaurantName: "Mirpur Restaurant",
        address: "Mirpur Dhaka"
    }
 ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.splice(0, 3).map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
        ))}
    </div>
  )
}

export default Providers