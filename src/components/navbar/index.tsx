"use client"
import React, { useState } from 'react'
import NavItem from './NavItem'
import HamMenu from './HamMenu'
import SwitchTheme from './SwitchTheme'
import Logo from '../UI/Logo/Logo'
import HamMenuBtn from '../UI/HamMenuBtn'
import OpacityContent from '../UI/Animation/OpacityContent'
import ScaleAnimation from '../UI/Animation/ScaleAnimation'
import LanguageChanger from '../LanguageChanger'
import AuthSection from '../UI/NavBarSections/AuthSection'

const NavBar = () => {
    const MOBILE_THRESHOLD: number = 768
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const toggleMenu = (arg: boolean) => {
        setOpenMenu(arg)
    }
    function updateSize(): void {
        window.innerWidth > MOBILE_THRESHOLD && toggleMenu(false);
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateSize);
    }
    return (
        <>
            <ScaleAnimation duration={0.5} scaleYVal boxClass='fixed top-0 bg-primary/50 origin-top backdrop-blur-2xl z-40 w-full'>


                <OpacityContent delay={0.5} boxClass="navbar xl:w-[70%] bg-transparent mx-auto" duration={1}>

                    <div className="navbar-start space-x-2">
                        <HamMenuBtn isOpen={openMenu} toggleMenu={toggleMenu} />
                        <Logo />
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <NavItem />
                    </div>
                    <div className="navbar-end">
                        <AuthSection />
                        <LanguageChanger />
                        <SwitchTheme />
                    </div>
                </OpacityContent>
            </ScaleAnimation>
            <HamMenu openMenu={openMenu} />
        </>
    )
}

export default NavBar