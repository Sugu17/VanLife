import { useEffect } from "react";
import useVanStore from "../hooks/useVanStore";
import VanCard from "./VanCard";

function VanGrid() {
  const vanStore = useVanStore();
  const vans = vanStore((state) => state.vans);
  const vanCards = vans?.map((data) => (
    <VanCard
      key={data.id}
      id={+data.id}
      name={data.name}
      price={data.price}
      type={data.type}
      imgURL={data.imageUrl}
    ></VanCard>
  ));
  return <div className="grid grid-cols-2 gap-x-6 gap-y-8">{vanCards}</div>;
}
export default VanGrid;
