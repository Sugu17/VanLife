import CategoryButton from "@components/buttons/CategoryButton";
import { Suspense, useEffect, useState } from "react";
import {
  Await,
  useAsyncValue,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import SkeletonGrid from "~/Components/SkeletonGrid";
import { FilterParamsContext } from "~/contexts/FilterParamsContext";
import { VanData } from "~/data/data";
import VanGrid from "./VanGrid";

function VansPage() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [selectedFilter, setSelectedFilter] = useState<string | null>();

  useEffect(() => {
    setSelectedFilter(searchParams.get("type"));
  }, [searchParams]);

  // Use pre-loaded vans
  const loaderData = useLoaderData() as { vans: Promise<VanData[]> };
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
            selected={selectedFilter === "simple"}
          >
            Simple
          </CategoryButton>
          <CategoryButton
            onClick={() => setSearchParams({ type: "luxury" })}
            variant="Luxury"
            selected={selectedFilter === "luxury"}
          >
            Luxury
          </CategoryButton>
          <CategoryButton
            onClick={() => setSearchParams({ type: "rugged" })}
            variant="Rugged"
            selected={selectedFilter === "rugged"}
          >
            Rugged
          </CategoryButton>
        </div>
        {/* Clear filter button */}
        {searchParams.get("type") && (
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
      <Suspense fallback={<SkeletonGrid />}>
        <Await resolve={loaderData.vans}>
          <LazyLoadedVanGrid selectedType={selectedFilter} />
        </Await>
      </Suspense>
    </div>
  );
}
export default VansPage;

interface Props {
  selectedType: string | null | undefined;
}

function LazyLoadedVanGrid({ selectedType }: Props) {
  const data = useAsyncValue() as VanData[];
  const [vans, setVans] = useState<VanData[]>();

  // Update the displayed vans whenever the typeQuery changes
  useEffect(() => {
    if (selectedType) setVans(data?.filter((van) => van.type === selectedType));
    else setVans(data);
  }, [selectedType, data]);

  return (
    <div className="mt-8">
      <FilterParamsContext.Provider value={selectedType ?? ""}>
        <VanGrid vans={vans} />
      </FilterParamsContext.Provider>
    </div>
  );
}
