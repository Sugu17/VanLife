import { useQuery } from "@tanstack/react-query";
import { VanData, data } from "../data/data";

interface RouteParams {
  id?: string;
  type: string;
}

export default function useVans(routeParams?: RouteParams) {
  const vansQuery = useQuery({
    queryFn: (): Promise<VanData[]> =>
      routeParams
        ? new Promise((resolve) =>
            resolve(data.filter((van) => van.type === routeParams.type))
          )
        : new Promise((resolve) => resolve(data)),
    queryKey: routeParams ? ["vans", routeParams] : ["vans"],
    staleTime: 60 * 60 * 1000,
  });
  return vansQuery;
}

export function getVanById(id: string | undefined): VanData | null {
  return data.find((data) => data.id === id) ?? null;
}
