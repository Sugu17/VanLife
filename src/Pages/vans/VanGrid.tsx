import { VanData } from "../../data/data";
import VanCard from "./VanCard";

interface Props {
  vans: VanData[] | undefined;
}

function VanGrid({ vans }: Props) {
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
