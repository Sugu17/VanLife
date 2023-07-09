function HostReviewPage() {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-[32px] font-bold">Your reviews</h2>
        <span className="text-neutral-600">
          last
          <span className="font-bold underline">30 days</span>
        </span>
      </div>
    </div>
  );
}
export default HostReviewPage;
