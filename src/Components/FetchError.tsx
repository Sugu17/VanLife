import { useRouteError } from "react-router-dom";

function FetchError() {
  const error: Error = useRouteError() as Error;

  return (
    <div className="px-7 flex flex-col gap-7 justify-start">
      <h2 className="text-[32px] text-neutral-900 font-bold">
        Sorry, There was an error in fetching vans
      </h2>
      <span className="text-neutral-900 font-semibold text-xl">
        Message:<span className="text-lg font-normal">{error.message}</span>
      </span>
      <button
        className="w-full font-bold text-center bg-neutral-900 p-3 rounded-md text-neutral-50"
        onClick={() => history.go(0)}
      >
        Try refreshing the page
      </button>
    </div>
  );
}
export default FetchError;
