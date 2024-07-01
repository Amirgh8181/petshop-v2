"use client"
import React, { useState } from 'react'
import LanguageChanger from '../LanguageChanger'
import NavItem from './NavItem'
import Link from 'next/link'
import HamMenu from './HamMenu'
import { RiLoginBoxFill } from 'react-icons/ri'
import { useTranslations } from 'next-intl'
import SwitchTheme from './SwitchTheme'
import Logo from '../UI/Logo/Logo'
import HamMenuBtn from '../UI/HamMenuBtn'
import ScaleYBox from '../UI/Animation/ScaleAnimation'
import OpacityContent from '../UI/Animation/OpacityContent'
import ScaleAnimation from '../UI/Animation/ScaleAnimation'

const NavBar = () => {
    const MOBILE_THRESHOLD: number = 768
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const t = useTranslations("navItem")
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
                        <SwitchTheme />
                        <LanguageChanger />
                        <Link href={"Auth/SignIn"} className="btn !px-2 font-bold">
                            {t("sign in")}
                            <RiLoginBoxFill size={"20px"} />
                        </Link>
                    </div>
                </OpacityContent>
            </ScaleAnimation>
            <HamMenu openMenu={openMenu} />
        </>
    )
}

export default NavBar