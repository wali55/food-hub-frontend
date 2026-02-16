"use server"

import { reviewService } from "@/services/review.service";

export const getReviews = async () => {
    const result = await reviewService.getReviews();
    return result;
}