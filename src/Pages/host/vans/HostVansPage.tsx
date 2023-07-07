import useVanStore from "../../../hooks/useVanStore";
import useVans from "../../../hooks/useVans";
import VanMedia from "../home/VanMedia";

function HostVansPage() {
  useVans();
  const vans = useVanStore((state) => state.vans);
  const listedVans = vans?.map((van, index) => (
    <VanMedia
      key={index}
      name={van.name}
      imgURL={van.imageUrl}
      price={van.price}
    />
  ));
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[32px] text-neutral-950 font-bold">
        Your listed vans
      </h2>
      <div className="flex flex-col gap-4">{listedVans}</div>
    </div>
  );
}
export default HostVansPage;
