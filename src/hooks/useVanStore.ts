import { create } from "zustand";
import { VanData } from "../data/data";
import useVans from "./useVans";

interface vanState {
  vans: VanData[] | undefined;
  isLoading: boolean;
  setVans: (newVans: VanData[] | undefined) => void;
}
function useVanStore() {
  const { data, isLoading } = useVans();
  const useVanStore = create<vanState>((set) => ({
    vans: data,
    isLoading: isLoading,
    setVans: (newVans: VanData[] | undefined) => set({ vans: newVans }),
  }));
  return useVanStore;
}

export default useVanStore;
