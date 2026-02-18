import { Provider } from "@/components/initializer/ProvidersInitializer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProviderCard = ({ provider }: { provider: Provider }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-[#FF5322]">{provider.restaurantName}</CardTitle>
                <CardDescription className="text-[#FF5322]">{provider.address}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
                <Button className="text-[#FF5322] border border-[#FF5322] bg-white hover:bg-orange-500 hover:text-white">Details</Button>
            </CardFooter>
        </Card>
    )
}

export default ProviderCard