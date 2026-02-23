"use server"

import { reviewService } from "@/services/review.service";
import { revalidateTag } from "next/cache";

export const getReviews = async () => {
    const result = await reviewService.getReviews();
    return result;
}

export const createReview = async (review: {content: string}) => {
    const result = await reviewService.createReview(review);
    revalidateTag("reviews", "max");
    return result;
}