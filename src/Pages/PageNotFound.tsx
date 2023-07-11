import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="px-7 flex flex-col gap-7 justify-center">
      <h2 className="text-[32px] text-neutral-900 font-bold">
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to="/">
        <button className="w-full font-bold text-center bg-neutral-900 p-3 rounded-md text-neutral-50">
          Return to home
        </button>
      </Link>
    </div>
  );
}
export default PageNotFound;
