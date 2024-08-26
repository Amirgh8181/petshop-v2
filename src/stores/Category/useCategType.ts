import { create } from "zustand";
import { persist } from "zustand/middleware";

interface categState {
    type: string
    setType: (arg: string) => void
}

export const useCategType = create<categState>()(
    persist(
        (set) => ({
            type: "All",
            setType: (arg) => {
                set({
                    type: arg
                })
            }
        }),
        {
            name: "categType"
        }
    )
)