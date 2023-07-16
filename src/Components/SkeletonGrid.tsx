import VansCardSkeleton from "./VansCardSkeleton";

function SkeletonGrid() {
  const skeletons = [];
  for (let i = 0; i < 10; ++i) {
    skeletons.push(<VansCardSkeleton key={i} />);
  }
  return <div className="grid grid-cols-2 gap-x-6 gap-y-8">{skeletons}</div>;
}
export default SkeletonGrid;
