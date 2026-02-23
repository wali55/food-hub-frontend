import { getCurrentProvider } from "@/actions/provider.action"
import ProviderProfileInitializer from "@/components/initializer/ProviderProfileInitializer"
import CreateProviderProfileDialog from "@/components/modules/provider-page/CreateProviderProfileDialog";
import ProviderProfile from "@/components/modules/provider-page/ProviderProfile";

const ProfilePage = async () => {
  const {data: providerData} = await getCurrentProvider();
  return (
    <div className="w-full">
      <div className="p-4 flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">Profile</h1>
        {!providerData?.id && <CreateProviderProfileDialog />}
      </div>
      <ProviderProfileInitializer providerProfile={providerData} />
      <div className="m-4">
        <ProviderProfile />
      </div>
    </div>
  )
}

export default ProfilePage