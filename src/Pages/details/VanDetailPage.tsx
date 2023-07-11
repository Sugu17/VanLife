import GoBack from "@components/GoBack";
import { Link, useLocation, useParams } from "react-router-dom";
import { VanData } from "~/data/data";
import useVans, { getVanById } from "~/hooks/useVans";
import VanDetail from "./VanDetail";

function VanDetailPage() {
  const params = useParams();
  useVans({ id: params.id });

  const location = useLocation();

  const goBackURL = location.state ? `../?type=${location.state}` : "../";

  const data = getVanById(params.id);
  return (
    <div className="flex flex-col py-2 pb-16 px-3 sm:px-6 gap-10">
      <Link to={goBackURL} relative="path">
        <GoBack />
      </Link>
      <img className="rounded-[5px]" src={data?.imageUrl} alt="" />
      <VanDetail {...(data as VanData)} />
    </div>
  );
}

export default VanDetailPage;
