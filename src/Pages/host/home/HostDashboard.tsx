import { useEffect } from "react";
import useVanStore from "../../../hooks/useVanStore";
import useVans from "../../../hooks/useVans";
import Summary from "./Summary";
import VanMedia from "./VanMedia";

function HostDashboard() {
  const { data, isLoading } = useVans();
  const setVans = useVanStore((state) => state.setVans);
  useEffect(() => setVans(data), [data]);

  const vans = useVanStore((state) => state.vans);

  const listedVans = vans?.map((van) => (
    <VanMedia
      name={van.name}
      imgURL={van.imageUrl}
      price={van.price}
      editable
    />
  ));
  return (
    <>
      <Summary />
      <div className="flex flex-col gap-7 px-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl text-neutral-950 font-bold">
            Your listed vans
          </h2>
          <span className="text-neutral-900">View all</span>
        </div>
        <div className="flex flex-col gap-4">{listedVans}</div>
      </div>
    </>
  );
}
export default HostDashboard;
