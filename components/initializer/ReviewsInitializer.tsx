"use client";

import { setReviews } from "@/features/review/reviewSlice";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";

export type Review = {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
  };
};

const ReviewsInitializer = ({ reviews }: { reviews: Review[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setReviews(reviews));
  }, [reviews]);

  return <div></div>;
};

export default ReviewsInitializer;
