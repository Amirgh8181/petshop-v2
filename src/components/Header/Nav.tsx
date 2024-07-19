"use client"
import React, { useState } from 'react'
import HamMenu from '../UI/NavBarSections/HamMenu/HamMenu'
import SwitchTheme from '../UI/NavBarSections/SwitchTheme/SwitchTheme'
import Logo from '../UI/Logo/Logo'
import HamMenuBtn from '../UI/HamMenuBtn'
import OpacityContent from '../UI/Animation/OpacityContent'
import LanguageChanger from '../UI/NavBarSections/LanguageChanger'
import AuthSection from '../UI/NavBarSections/AuthSection'
import DesktopNavItem from '../UI/NavBarSections/NavItem/Desktop'

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
            <nav className='fixed top-0 bg-primary/50 origin-top backdrop-blur-2xl z-40 w-full' dir='ltr'>


                <OpacityContent delay={0.5} boxClass="navbar xl:w-[70%] bg-transparent mx-auto" duration={1}>

                    <div className="navbar-start space-x-2">
                        <HamMenuBtn isOpen={openMenu} toggleMenu={toggleMenu} />
                        <Logo />
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <DesktopNavItem />
                    </div>
                    <div className="navbar-end">
                        <AuthSection />
                        <LanguageChanger />
                        <SwitchTheme />
                    </div>
                </OpacityContent>
            </nav>
            <HamMenu openMenu={openMenu} toggle={toggleMenu}/>
        </>
    )
}

export default NavBar