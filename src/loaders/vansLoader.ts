import { QueryClient } from "@tanstack/react-query";
import { getAllVans } from "~/hooks/useVans";

export default async function vansLoader(queryClient: QueryClient) {
  // throw new Error("Failed to fetch data");
  return await queryClient
    .prefetchQuery({
      queryKey: ["vans"],
      queryFn: getAllVans,
    })
    .then(() => "Prefetched vans");
}
