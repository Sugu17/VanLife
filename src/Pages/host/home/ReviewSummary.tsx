import { BsStarFill } from "react-icons/bs";

{
  /* Review Score */
}
function ReviewSummary() {
  return (
    <div className="bg-[#FFDDB2] px-7 py-9 flex flex-row justify-between align-middle items-center">
      <div className="flex flex-row gap-4 align-middle items-center">
        <span className="text-2xl font-bold">Review Score</span>
        <span className="flex flex-row items-center">
          <span className="text-xl text-[#FF8C38]">
            <BsStarFill />
          </span>
          <div className="flex flex-row items-center">
            <span className="align-middle text-neutral-950 font-bold text-xl">
              &nbsp;&nbsp;5.0
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
export default ReviewSummary;
