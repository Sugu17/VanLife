import { BsStarFill } from "react-icons/bs";

interface Props {
  stars: number;
  name: string;
  date: string;
  review: string;
}

function ReviewCard(props: Props) {
  const reviewStars = [];
  for (let i = 0; i < props.stars; ++i) {
    reviewStars.push(
      <span className="text-[#FF8C38] text-lg">
        <BsStarFill />
      </span>
    );
  }
  return (
    <div className="pb-6 border-b-2 border-neutral-300 flex flex-col gap-4">
      {/* Review Stars */}
      <div className="flex gap-1">{reviewStars}</div>
      {/* Reviewer name and date */}
      <div className="flex gap-2 capitalize">
        <h3 className="font-semibold text-neutral-900">{props.name}</h3>
        <span className="text-neutral-500">{props.date}</span>
      </div>
      {/* Review */}
      <p className="text-neutral-900 text-left">{props.review}</p>
    </div>
  );
}
export default ReviewCard;
