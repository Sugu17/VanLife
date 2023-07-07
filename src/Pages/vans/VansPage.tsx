import CategoryButton from "../../Components/CategoryButton";
import VanGrid from "./VanGrid";
import useVanStore from "../../hooks/useVanStore";
import useVans from "../../hooks/useVans";

function VansPage() {
  const { data } = useVans();
  const setVans = useVanStore((state) => state.setVans);
  return (
    <div className="flex flex-col px-3 sm:px-6 py-4 pb-20 gap-4">
      <h2 className="text-[28px] font-bold text-neutral-950">
        Explore our van options
      </h2>
      <div className="flex flex-row gap-4 sm:gap-8">
        <div className="flex flex-row gap-3 flex-grow">
          <CategoryButton variant="Simple" unstyled>
            Simple
          </CategoryButton>
          <CategoryButton variant="Luxury" unstyled>
            Luxury
          </CategoryButton>
          <CategoryButton variant="Rugged" unstyled>
            Rugged
          </CategoryButton>
        </div>
        <button
          type="button"
          className="text-neutral-600 underline capitalize whitespace-nowrap"
          onClick={() => setVans(data)}
        >
          <span className="inline min-[400px]:hidden">Clear</span>
          <span className="hidden min-[400px]:inline">Clear Filters</span>
        </button>
      </div>
      <div className="mt-8">
        <VanGrid />
      </div>
    </div>
  );
}
export default VansPage;
