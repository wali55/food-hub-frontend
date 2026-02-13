import ReviewCard from "./ReviewCard"

const Reviews = ({limit}: {limit?: number}) => {
 const reviews = [
    {
        id: "1",
        user: "Md. Wali",
        content: "Delicious chicken burger"
    },
    {
        id: "2",
        user: "Md. Wali",
        content: "Delicious chicken burger"
    },
    {
        id: "3",
        user: "Md. Wali",
        content: "Delicious chicken burger"
    },
    {
        id: "4",
        user: "Md. Wali",
        content: "Delicious chicken burger"
    }
 ];

 const desplayedReviews = limit ? reviews.slice(0, 3) : reviews;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {desplayedReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
        ))}
    </div>
  )
}

export default Reviews