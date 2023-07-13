import { QueryClient } from "@tanstack/react-query";
import { getVanById } from "~/hooks/useVans";

export default async function vansDetailsLoader(
  queryClient: QueryClient,
  id?: string
) {
  // throw new Error("Failed to fetch data");
  queryClient.prefetchQuery({
    queryKey: ["vans", { id: id }],
    queryFn: async () => {
      await getVanById(id);
      return "Prefetched";
    },
    staleTime: Infinity,
  });
  return "Prefetched vanDetails";
}
