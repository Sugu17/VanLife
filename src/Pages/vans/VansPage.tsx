import CategoryButton from "@components/buttons/CategoryButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VanData } from "~/data/data";
import useVans from "~/hooks/useVans";
import VanGrid from "./VanGrid";
import { FilterParamsContext } from "~/contexts/FilterParamsContext";

interface VansQuery {
  type: string;
}

function VansPage() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [vansQuery, setVansQuery] = useState<VansQuery>({ type: "" });
  const { data } = useVans();
  const [vans, setVans] = useState<VanData[] | undefined>(data as VanData[]);

  useEffect(() => {
    setVansQuery({ type: searchParams.get("type") ?? "" });
  }, [searchParams]);

  useEffect(() => {
    if (vansQuery.type)
      setVans(data?.filter((van) => van.type === vansQuery.type));
    else setVans(data);
  }, [data, vansQuery]);

  return (
    <div className="flex flex-col px-3 sm:px-6 py-4 pb-20 gap-4">
      <h2 className="text-[28px] font-bold text-neutral-950">
        Explore our van options
      </h2>
      <div className="flex flex-row gap-4 sm:gap-8">
        <div className="flex flex-row gap-3 flex-grow">
          <CategoryButton
            onClick={() => setSearchParams({ type: "simple" })}
            variant="Simple"
            selected={vansQuery.type === "simple"}
          >
            Simple
          </CategoryButton>
          <CategoryButton
            onClick={() => setSearchParams({ type: "luxury" })}
            variant="Luxury"
            selected={vansQuery.type === "luxury"}
          >
            Luxury
          </CategoryButton>
          <CategoryButton
            onClick={() => setSearchParams({ type: "rugged" })}
            variant="Rugged"
            selected={vansQuery.type === "rugged"}
          >
            Rugged
          </CategoryButton>
        </div>
        {vansQuery.type && (
          <button
            type="button"
            className="text-neutral-600 underline capitalize whitespace-nowrap"
            onClick={() => setSearchParams({})}
          >
            <span className="inline min-[400px]:hidden">Clear</span>
            <span className="hidden min-[400px]:inline">Clear Filters</span>
          </button>
        )}
      </div>
      <div className="mt-8">
        <FilterParamsContext.Provider value={vansQuery.type}>
          <VanGrid vans={vans} />
        </FilterParamsContext.Provider>
      </div>
    </div>
  );
}
export default VansPage;
