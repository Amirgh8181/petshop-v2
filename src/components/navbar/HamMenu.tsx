import { AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";
import ScaleAnimation from "../UI/Animation/ScaleAnimation";


const HamMenu = ({ openMenu }: { openMenu: boolean }) => {

    return (
        <AnimatePresence>
            {
                openMenu &&
                <ScaleAnimation scaleYVal boxClass='w-full h-screen flex items-center justify-center fixed bg-primary z-30 inset-0 origin-top'>
                    <NavItem />
                </ScaleAnimation>
            }
        </AnimatePresence>

    )
}

export default HamMenu