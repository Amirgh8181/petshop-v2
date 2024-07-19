import { AnimatePresence } from "framer-motion";
import ScaleAnimation from "../../Animation/ScaleAnimation";
import MobileNavItem from "../NavItem/Mobile";


const HamMenu = ({ openMenu, toggle }: { openMenu: boolean, toggle: (arg:boolean) => void }) => {

    return (
        <AnimatePresence>
            {
                openMenu &&
                <ScaleAnimation scaleYVal boxClass='w-full h-screen flex items-center justify-center fixed bg-primary z-30 inset-0 origin-top'>
                    <MobileNavItem toggle={toggle}/>
                </ScaleAnimation>
            }
        </AnimatePresence>

    )
}

export default HamMenu