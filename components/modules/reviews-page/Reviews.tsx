"use client"

import { useAppSelector } from "@/hooks";
import ReviewCard from "./ReviewCard";
import { Review } from "@/components/initializer/ReviewsInitializer";

const Reviews = ({limit}: {limit?: number}) => {

 const {reviews} = useAppSelector((state) => state.review);

 const displayedReviews = limit && reviews?.length ?  reviews.slice(0, 3) : reviews;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews?.length && displayedReviews?.map((review) => (
        <ReviewCard key={(review as Review).id} review={review} />
        ))}
    </div>
  )
}

export default Reviews