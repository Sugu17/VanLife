import { useState } from "react";
import CategoryButton, { Variants } from "@components/buttons/CategoryButton";
import useVans, { RouteParams } from "~/hooks/useVans";
import VanGrid from "./VanGrid";

function VansPage() {
  const [vansQuery, setVansQuery] = useState<RouteParams>({});
  const { data } = useVans(
    Object.keys(vansQuery).length === 0 ? undefined : vansQuery
  );

  function handleClick(filterType: Variants) {
    setVansQuery((prevQuery) => ({
      ...prevQuery,
      type: filterType.toLowerCase(),
    }));
  }
  return (
    <div className="flex flex-col px-3 sm:px-6 py-4 pb-20 gap-4">
      <h2 className="text-[28px] font-bold text-neutral-950">
        Explore our van options
      </h2>
      <div className="flex flex-row gap-4 sm:gap-8">
        <div className="flex flex-row gap-3 flex-grow">
          <CategoryButton onClick={handleClick} variant="Simple" unstyled>
            Simple
          </CategoryButton>
          <CategoryButton onClick={handleClick} variant="Luxury" unstyled>
            Luxury
          </CategoryButton>
          <CategoryButton onClick={handleClick} variant="Rugged" unstyled>
            Rugged
          </CategoryButton>
        </div>
        <button
          type="button"
          className="text-neutral-600 underline capitalize whitespace-nowrap"
          onClick={() => setVansQuery({})}
        >
          <span className="inline min-[400px]:hidden">Clear</span>
          <span className="hidden min-[400px]:inline">Clear Filters</span>
        </button>
      </div>
      <div className="mt-8">
        <VanGrid vans={data} />
      </div>
    </div>
  );
}
export default VansPage;
