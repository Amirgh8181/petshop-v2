import { CloseHamMenu, OpenHamMenu } from '@/src/assets/svgs'
import React from 'react'

interface HamMenuBtnProp{
    toggleMenu:(arg:boolean)=>void
    isOpen:boolean
}

const HamMenuBtn = ({toggleMenu,isOpen}:HamMenuBtnProp) => {
    return (
        <label className="btn swap swap-rotate md:hidden w-[6.5vmax]" >
            <input type="checkbox" onClick={() => toggleMenu(!isOpen)} />
            <OpenHamMenu className="swap-off fill-current w-[70%] mx-auto" />
            <CloseHamMenu className="swap-on fill-current w-[70%] mx-auto" />
        </label>
    )
}

export default HamMenuBtn