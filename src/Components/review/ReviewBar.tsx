interface Props {
  stars: number;
  percentage: number;
}

function ReviewBar(props: Props) {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-6 text-neutral-600">
      <span className="whitespace-nowrap">{props.stars} stars</span>
      <div className="w-full">
        <div
          className="h-2 bg-[#FF8C38] rounded-xl"
          style={{ width: "100%" }}
        ></div>
      </div>
      <span className="whitespace-nowrap">{props.percentage}%</span>
    </div>
  );
}
export default ReviewBar;
