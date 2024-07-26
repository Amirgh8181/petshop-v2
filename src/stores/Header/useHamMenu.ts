
import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    isOpenHam: boolean
    setToggleHam: () => void;
    setCloseHam: () => void;
}


// Create the store with Zustand, combining the status interface and actions
export const useHamMenu = create<State>()(
    persist(
        (set) => ({
            isOpenHam: false,
            setToggleHam: () => {
                const currentIsOpen = useHamMenu.getState().isOpenHam
                set({
                    isOpenHam: !currentIsOpen
                })
            },
            setCloseHam: () => {
                set({
                    isOpenHam: false
                })
            }
        }),
        {
            name: "HamMenu"
        }
    )
)

