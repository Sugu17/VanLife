import { useQuery } from "@tanstack/react-query";
import { data } from "../data/data";

export interface RouteParams {
  id?: string;
  type?: string;
}

export async function getVans() {
  return data;
}

export async function getVanById(id?: string) {
  return data.filter((van) => van.id === id);
}

export default function useVans(routeParams?: RouteParams) {
  const vansQuery = useQuery({
    queryKey: routeParams ? ["vans", routeParams] : ["vans"],
    queryFn: async () => {
      if (routeParams?.id) {
        const van = await getVanById(routeParams.id);
        return van;
      } else {
        const vans = await getVans();
        return vans;
      }
    },
    staleTime: Infinity,
  });
  return vansQuery;
}
