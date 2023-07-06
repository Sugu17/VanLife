import useVans from "../hooks/useVans";
import VanCard from "./VanCard";

function VanGrid() {
  const { data: vanData, isLoading } = useVans();
  const vanCards = vanData?.map((data) => (
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
