import { BsStarFill } from "react-icons/bs";
import ReviewBar from "@components/review/ReviewBar";
import ReviewCard from "./ReviewCard";

function HostReviewPage() {
  const reviews: { stars: number; percentage: number }[] = [
    { stars: 5, percentage: 100 },
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];
  const reviewBars = reviews.map((data, index) => (
    <ReviewBar key={index} stars={data.stars} percentage={data.percentage} />
  ));
  return (
    <div className="flex flex-col gap-8">
      {/* Review heading */}
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-[32px] leading-tight font-bold">Your reviews</h2>
        <span className="self-end text-neutral-600">
          last&nbsp;
          <span className="font-semibold underline">30 days</span>
        </span>
      </div>
      {/* Review Ratings*/}
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-[32px] font-bold">5.0</span>
          <span className="flex gap-1">
            <span className="text-[#FF8C38] text-xl">
              <BsStarFill />
            </span>
            <span>Overall rating</span>
          </span>
        </div>
        {/* Rating Bars */}
        <div className="flex flex-col gap-3">{reviewBars}</div>
      </div>
      {/* Reviews */}
      <div className="flex flex-col gap-4">
        {/* Review Count */}
        <h2 className="text-lg font-bold">Reviews (2)</h2>
        <div className="flex flex-col gap-6 px-1">
          <ReviewCard
            date="December 1, 2022"
            name="Elliot"
            stars={5}
            review="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
          />
          <ReviewCard
            date="November 23, 2022"
            name="Sandy"
            stars={5}
            review="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
          />
        </div>
      </div>
    </div>
  );
}
export default HostReviewPage;
