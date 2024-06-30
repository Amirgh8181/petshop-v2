"use client"
import React, { useState } from 'react'
import LanguageChanger from '../LanguageChanger'
import NavItem from './NavItem'
import Link from 'next/link'
import HamMenu from './HamMenu'
import ham from "@/public/svg/ham.svg"
import close from "@/public/svg/close.svg"
import Image from 'next/image'
import { RiLoginBoxFill } from 'react-icons/ri'
import { useTranslations } from 'next-intl'
import SwitchTheme from './SwitchTheme'
import Logo from '../UI/Logo/Logo'
import { CloseHamMenu, OpenHamMenu } from '@/src/assets/svgs'
import HamMenuBtn from '../UI/HamMenuBtn'

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
            <div className='fixed top-0 bg-primary/50 backdrop-blur-2xl z-40 w-full'>


                <div className="navbar xl:w-[70%] bg-transparent mx-auto">

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
                </div>
            </div>
            <HamMenu openMenu={openMenu} />
        </>
    )
}

export default NavBar