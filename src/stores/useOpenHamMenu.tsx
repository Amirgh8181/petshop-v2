import { create } from "zustand";

// Define the interface of the Cart state
interface State {
    open: boolean,
    setOpen:()=>void
}


export const useOpenMenu = create<State>((set) => ({
    open: false,
    setOpen: () => set(() => ({ open: !open })),
  }))




