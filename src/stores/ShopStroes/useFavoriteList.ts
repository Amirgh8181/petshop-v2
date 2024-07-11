import { ShopItem } from "@/root/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    FavoriteList: ShopItem[]
    setFavoriteList: (arg: ShopItem) => void;
}


// Create the store with Zustand, combining the status interface and actions
export const useFavoriteList = create<State>()(
    persist(
        (set) => ({
            FavoriteList: [],

            setFavoriteList: (arg) => {
                const favor = useFavoriteList.getState().FavoriteList

                if (favor.includes(arg)) {
                    let index = favor.findIndex(q => q._id === arg._id)
                    favor.splice(index, 1)


                    set({
                        FavoriteList: [...favor]
                    })
                }
                else {
                    set({
                        FavoriteList: [...favor, arg]
                    })
                }
            }
        }),
        {
            name: "FavoriteList"
        }
    )
)

