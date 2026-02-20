"use client";

import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks";

const CustomerProfile = () => {
  const { profile } = useAppSelector((state) => state.customerProfile);
  return (
    <Card className="p-4 text-[#FF5322]">
      <div className="block md:flex justify-between text-lg">
        <p><span className="font-semibold">Name:</span> {profile.name}</p>
        <p><span className="font-semibold">Email:</span> {profile.email}</p>
      </div>
      <p ><span className="font-semibold">Phone:</span> {profile.phone}</p>
      <p className="text-sm"><span className="font-semibold">Address:</span> {profile.address}</p>
    </Card>
  );
};

export default CustomerProfile;
