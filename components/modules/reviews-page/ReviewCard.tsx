import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Review } from "./Reviews"

const ReviewCard = ({review}: {review: Review}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-[#FF5322]">{review.user.name}</CardTitle>
            <CardDescription className="text-[#FF5322]">{review.content}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default ReviewCard