import CreateReview from "@/components/modules/reviews-page/CreateReview";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReviewPage = () => {
  return (
    <div className="m-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-[#FF5322] text-xl font-bold">My Profile</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
      <div className="my-4 max-w-2xl">
        <CreateReview />
      </div>
    </div>
  );
};

export default ReviewPage;
