import GoBack from "@components/GoBack";
import { Link, useParams } from "react-router-dom";
import useVans from "~/hooks/useVans";
import HostVanDetailCard from "./HostVanDetailCard";

function HostVanDetailPage() {
  const params = useParams();
  const { data } = useVans({ id: params.id });
  const van = data ? data[0] : null;
  return (
    <div className="flex flex-col gap-9">
      <Link to={".."} relative="path">
        <GoBack />
      </Link>
      <HostVanDetailCard
        imgURL={van?.imageUrl}
        name={van?.name}
        price={van?.price}
        type={van?.type ?? ""}
        desc={van?.description}
      />
    </div>
  );
}
export default HostVanDetailPage;
