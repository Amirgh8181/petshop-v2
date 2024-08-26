"use client"
import { AnimatePresence } from "framer-motion";
import ScaleAnimation from "../../Animation/ScaleAnimation";
import MobileNavItem from "../NavItem/Mobile";
import { useHamMenu } from "@/src/stores/Header/useHamMenu";


const HamMenu = () => {
    const {isOpenHam}=useHamMenu()
    return (
        <AnimatePresence>
            {
                isOpenHam &&
                <ScaleAnimation scaleYVal boxClass='w-full h-screen flex items-center justify-center fixed bg-primary z-30 inset-0 origin-top'>
                    <MobileNavItem/>
                </ScaleAnimation>
            }
        </AnimatePresence>

    )
}

export default HamMenu