import { getCurrentUser } from "@/actions/auth.action";
import CustomerProfileInitializer from "@/components/initializer/CustomerProfileInitializer";
import CustomerProfile from "@/components/modules/customer-page/CustomerProfile";
import EditCustomerProfileDialog from "@/components/modules/customer-page/EditCustomerProfileDialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfilePage = async () => {
  const { data: profileData } = await getCurrentUser();
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">My Profile</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <CustomerProfileInitializer profile={profileData} />
      <div className="my-4 max-w-2xl">
        <CustomerProfile />
        <div className="my-4">
          <EditCustomerProfileDialog />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
