interface Props {
  stars: number;
  percentage: number;
}

function ReviewBar(props: Props) {
  return (
    <div
      className="text-neutral-600 gap-6"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 1fr",
        alignItems: "center",
      }}
    >
      <span className="whitespace-nowrap">{props.stars} stars</span>
      <div className="rounded-xl overflow-hidden w-full bg-neutral-300 ">
        <div
          className="h-2 bg-[#FF8C38] "
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
      <span className="whitespace-nowrap justify-self-end">
        {props.percentage}%
      </span>
    </div>
  );
}
export default ReviewBar;
