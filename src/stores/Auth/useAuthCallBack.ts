
import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    callBackUrl: string,
    setCallBackUrl: (arg: string) => void,

}


// Create the store with Zustand, combining the status interface and actions
export const useAuthCallBack = create<State>()(
    persist(
        (set) => ({
            callBackUrl: "/",
            setCallBackUrl: (arg) => {
                set({
                    callBackUrl: arg
                })
            },
        }),
        {
            name: "AuthCallback"
        }
    )
)

