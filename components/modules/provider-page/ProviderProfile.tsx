"use client";

import { useAppSelector } from "@/hooks";

const ProviderProfile = () => {
  const { providerProfile } = useAppSelector((state) => state.provider);

  if (!providerProfile?.id) {
    return <p>Provider restaurant is not created yet!</p>;
  }

  const { restaurantName, address, user } = providerProfile;
  return (
    <div className="border border-neutral-200 p-4 rounded-md max-w-2xl flex flex-col gap-4">
      <h2 className="text-2xl"><span className="font-semibold">Restaurant:</span> {restaurantName}</h2>
      <div className="flex justify-between">
        <p><span className="font-semibold">Address: </span>{address}</p>
        <p><span className="font-semibold">Owner: </span>{user.name}</p>
      </div>
      <div className="flex justify-between">
        <p><span className="font-semibold">Email: </span>{user.email}</p>
        <p><span className="font-semibold">Phone: </span>{user.phone}</p>
      </div>
    </div>
  );
};

export default ProviderProfile;
