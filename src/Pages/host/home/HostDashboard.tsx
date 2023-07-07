import { useEffect } from "react";
import NavLinks, { NavInfo } from "../../../Components/NavLinks";
import useVanStore from "../../../hooks/useVanStore";
import useVans from "../../../hooks/useVans";
import Summary from "./Summary";
import VanMedia from "./VanMedia";

function HostDashboard() {
  const { data, isLoading } = useVans();
  const setVans = useVanStore((state) => state.setVans);
  useEffect(() => setVans(data), [data]);

  const vans = useVanStore((state) => state.vans);
  const navLinks: NavInfo[] = [
    { name: "DashBoard", to: "" },
    { name: "Income", to: "" },
    { name: "Vans", to: "" },
    { name: "Reviews", to: "" },
  ];
  const listedVans = vans?.map((van) => (
    <VanMedia
      name={van.name}
      imgURL={van.imageUrl}
      price={van.price}
      editable
    />
  ));
  return (
    <div className="flex flex-col gap-11 py-4 pb-14">
      <div className="px-6">
        <NavLinks info={navLinks} textSize="lg" />
      </div>
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
    </div>
  );
}
export default HostDashboard;
