import { QueryClient } from "@tanstack/react-query";
import { defer } from "react-router-dom";
import { getVans } from "~/hooks/useVans";

export default async function vansLoader(queryClient: QueryClient) {
  const dataPromise = queryClient.ensureQueryData({
    queryKey: ["vans"],
    queryFn: async () => {
      const vans = await getVans();
      return vans;
    },
    staleTime: Infinity,
  });

  return defer({ vans: dataPromise });
}

// These loader implementation prefetches the vans data and uses react-query
// for actual data access within the component

/*
function loader(){
    queryClient.prefetchQuery({
    queryKey: ["vans"],
    queryFn: async () => await getVans(),
  });
}
*/
