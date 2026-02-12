import ReviewCard from "./ReviewCard"

const Reviews = () => {
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
 ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.splice(0, 3).map((review) => (
        <ReviewCard key={review.id} review={review} />
        ))}
    </div>
  )
}

export default Reviews