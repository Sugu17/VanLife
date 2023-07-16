function VansCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {/* Img Placeholder */}
      <div className="aspect-square w-full animate-pulse">
        <div className="rounded-[5px] h-48 bg-neutral-300" />
      </div>

      {/* Button */}
      <div className="w-[96px] h-9 max-w-[105px] rounded-md bg-neutral-300 animate-pulse"></div>
    </div>
  );
}
export default VansCardSkeleton;
