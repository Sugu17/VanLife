import { create } from "zustand";
import { VanData } from "../data/data";

interface vanState {
  vans: VanData[] | undefined;
  setVans: (newVans: VanData[] | undefined) => void;
}
const useVanStore = create<vanState>((set) => ({
  vans: [],
  setVans: (newVans: VanData[] | undefined) => set({ vans: newVans }),
}));

export default useVanStore;
