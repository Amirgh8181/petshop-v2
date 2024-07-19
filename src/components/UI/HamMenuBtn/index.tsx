import { CloseHamMenu, OpenHamMenu } from '@/src/assets/svgs'
import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

interface HamMenuBtnProp {
    toggleMenu: (arg: boolean) => void
    isOpen: boolean
}

const HamMenuBtn = ({ toggleMenu, isOpen }: HamMenuBtnProp) => {
    return (
        <label className="navbarBtn swap swap-rotate md:hidden" >
            <input type="checkbox" onClick={() => toggleMenu(!isOpen)} />
            {isOpen ?
                <RiCloseLargeLine className='text-2xl' />
                :
                <RiMenu2Line className='text-2xl' />
            }
        </label>
    )
}

export default HamMenuBtn