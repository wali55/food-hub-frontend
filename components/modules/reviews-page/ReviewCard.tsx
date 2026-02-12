import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ReviewProps = {
    id: string;
    user: string;
    content: string;
}

const ReviewCard = ({review}: {review: ReviewProps}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="text-[#FF5322]">{review.user}</CardTitle>
            <CardDescription className="text-[#FF5322]">{review.content}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default ReviewCard