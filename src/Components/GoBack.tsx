import { BsArrowLeft } from "react-icons/bs";

function GoBack() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <span className="text-2xl text-neutral-600 align-middle">
        <BsArrowLeft />
      </span>
      <span className="underline text-[#201F1D]">Back to all vans</span>
    </div>
  );
}
export default GoBack;
