import { QueryClient } from "@tanstack/react-query";
import { getAllVans } from "~/hooks/useVans";

export default async function vansLoader(queryClient: QueryClient) {
  return await queryClient
    .prefetchQuery({
      queryKey: ["vans"],
      queryFn: getAllVans,
    })
    .then(() => "Prefetched vans");
}
