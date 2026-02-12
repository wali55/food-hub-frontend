import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProviderProps = {
    restaurantName: string;
    address: string;
}

const ProviderCard = ({ provider }: { provider: ProviderProps }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-[#FF5322]">{provider.restaurantName}</CardTitle>
                <CardDescription className="text-[#FF5322]">{provider.address}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
                <Button className="bg-[#FF5322]">Details</Button>
            </CardFooter>
        </Card>
    )
}

export default ProviderCard