import { AnimatePresence } from "framer-motion";
import ScaleYBox from "../UI/Animation/ScaleYBox";
import NavItem from "./NavItem";


const HamMenu = ({ openMenu }: { openMenu: boolean }) => {

    return (
        <AnimatePresence>
            {
                openMenu &&
                <ScaleYBox boxClass='w-full h-screen flex items-center justify-center fixed bg-primary z-30 inset-0 origin-top'>
                    <NavItem />
                </ScaleYBox>
            }
        </AnimatePresence>

    )
}

export default HamMenu