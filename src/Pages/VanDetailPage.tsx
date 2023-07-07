import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import VanDetail from "../Components/VanDetail";
import { VanData } from "../data/data";
import useVans, { getVanById } from "../hooks/useVans";

function VanDetailPage() {
  const params = useParams();
  useVans({ id: params.id });
  const data = getVanById(params.id);
  return (
    <div className="flex flex-col py-2 pb-16 px-3 sm:px-6 gap-10">
      <Link to="/vans">
        <div className="flex flex-row gap-3 items-center">
          <span className="text-2xl text-neutral-600 align-middle">
            <BsArrowLeft />
          </span>
          <span className="underline text-[#201F1D]">Back to all vans</span>
        </div>
      </Link>
      <img className="rounded-[5px]" src={data?.imageUrl} alt="" />
      <VanDetail {...(data as VanData)} />
    </div>
  );
}

export default VanDetailPage;
