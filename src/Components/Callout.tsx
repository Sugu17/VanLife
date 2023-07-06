import { Link } from "react-router-dom";

function Callout() {
  return (
    <div className="flex flex-col items-start gap-6 bg-[#FFCC8D] rounded-[5px] px-9 py-8">
      <h2 className="text-2xl max-w-[550px] font-bold">
        Your destination is waiting. Your van is ready.
      </h2>
      <Link to="/vans/">
        <button
          type="button"
          className="max-w-[180px] whitespace-nowrap bg-neutral-950 text-neutral-50 font-bold px-6 py-3 rounded-[10px]"
        >
          Explore our vans
        </button>
      </Link>
    </div>
  );
}
export default Callout;
