import { BsStarFill } from "react-icons/bs";

{
  /* Review Score */
}
function ReviewSummary() {
  return (
    <div className="bg-[#FFDDB2] px-3 py-9 flex flex-row justify-between align-middle items-center">
      {/* Review score container */}
      <div className="flex flex-row gap-2 align-middle items-center">
        <span className="text-2xl font-bold">Review Score</span>
        {/* Rating star Container */}
        <span className="flex flex-row items-center">
          <span className="text-xl text-[#FF8C38]">
            <BsStarFill />
          </span>
          <div className="flex flex-row items-center">
            <span className="align-middle text-neutral-950 font-bold text-xl">
              &nbsp;5.0
            </span>
            <span className="align-middle text-neutral-500 text-xl">
              &nbsp;/&nbsp;5
            </span>
          </div>
        </span>
      </div>
      <span className="text-neutral-800">Details</span>
    </div>
  );
}

function Summary() {
  return (
    <div>
      {/* Summary Card */}
      <div className="bg-[#FFEAD0] px-3 py-8 flex flex-col gap-8">
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
