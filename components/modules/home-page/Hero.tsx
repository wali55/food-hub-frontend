import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={cn("overflow-hidden py-32")}>
      <div className="w-full">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl">
              Order and Get the Food at Your Door Step
            </h2>
            <p className="mx-auto max-w-3xl text-center text-[#FF5322] md:text-lg">
              Order delicious food easily with food hub, which has lots of popular resturants with varity food items you love.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
              <Button size="lg" className="bg-[#FF5322] hover:bg-orange-500" asChild>
                <Link href="/meals">
                  Order Now
                </Link>
              </Button>
              <div className="text-xs text-[#FF5322]">Trusted by 1000+ Customers</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
