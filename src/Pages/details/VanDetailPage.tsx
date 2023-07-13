import GoBack from "@components/GoBack";
import { Link, useLocation, useParams } from "react-router-dom";
import useVans from "~/hooks/useVans";
import VanDetail from "./VanDetail";

export function VanDetailPage() {
  const params = useParams();
  const { data: queryData } = useVans({ id: params.id });
  const data = queryData ? queryData[0] : null;
  const location = useLocation();
  const goBackURL = location.state ? `../?type=${location.state}` : "../";

  return (
    <div className="flex flex-col py-2 pb-16 px-3 sm:px-6 gap-10">
      <Link to={goBackURL} relative="path">
        <GoBack />
      </Link>
      <img className="rounded-[5px]" src={data?.imageUrl} alt="" />
      <VanDetail
        name={data?.name}
        description={data?.description}
        price={data?.price}
        type={data?.type ?? ""}
      />
    </div>
  );
}

export default VanDetailPage;
