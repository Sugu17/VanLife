import { QueryClient } from "@tanstack/react-query";
import { getVans } from "~/hooks/useVans";

export default async function vansLoader(queryClient: QueryClient) {
  // throw new Error("Failed to fetch data");
  queryClient.prefetchQuery({
    queryKey: ["vans"],
    queryFn: async () => await getVans(),
  });
  return "Prefetched vans";
}
