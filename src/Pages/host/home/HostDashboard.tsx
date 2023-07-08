import useVanStore from "../../../hooks/useVanStore";
import useVans from "../../../hooks/useVans";
import Summary from "./Summary";
import VanMedia from "./VanMedia";

function HostDashboard() {
  useVans();
  const vans = useVanStore((state) => state.vans);
  const listedVans = vans?.map((van, index) => (
    <VanMedia
      key={index}
      name={van.name}
      imgURL={van.imageUrl}
      price={van.price}
      editable
    />
  ));
  return (
    <>
      <Summary />
      <div className="flex flex-col gap-7">
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
