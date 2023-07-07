import { BsStarFill } from "react-icons/bs";
import ReviewSummary from "./ReviewSummary";

function Summary() {
  return (
    <div>
      {/* Summary Card */}
      <div className="bg-[#FFEAD0] px-7 py-8 flex flex-col gap-8">
        <h2 className="text-4xl font-bold text-neutral-950">Welcome!</h2>
        <div className="flex flex-row justify-between">
          <span className="text-neutral-500">
            Income last{" "}
            <span className="text-neutral-700 underline">30 days</span>
          </span>
          <span className="text-neutral-800">Details</span>
        </div>
        <h2 className="text-5xl font-extrabold text-neutral-950">$2,260</h2>
      </div>
      <ReviewSummary />
    </div>
  );
}
export default Summary;
