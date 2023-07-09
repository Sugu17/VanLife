import { Link, useParams } from "react-router-dom";
import GoBack from "../../../Components/GoBack";
import { VanData } from "../../../data/data";
import useVans, { getVanById } from "../../../hooks/useVans";
import HostVanDetailCard from "./HostVanDetailCard";

function HostVanDetailPage() {
  const params = useParams();
  useVans({ id: params.id });
  const van = getVanById(params.id) as VanData;

  return (
    <div className="flex flex-col gap-9">
      <Link to={".."} relative="path">
        <GoBack />
      </Link>
      <HostVanDetailCard
        imgURL={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
        desc={van.description}
      />
    </div>
  );
}
export default HostVanDetailPage;
