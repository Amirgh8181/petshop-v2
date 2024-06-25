"use client"
import React, { useState } from 'react'
import LanguageChanger from '../LanguageChanger'
import NavItem from './NavItem'
import Link from 'next/link'
import HamMenu from './HamMenu'
import ham from "../../../public/svg/ham.svg"
import close from "../../../public/svg/close.svg"
import logo from "../../../public/images/logo/logo-text-black.png"
import Image from 'next/image'
import { RiLoginBoxFill } from 'react-icons/ri'

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
            <div className="navbar bg-base-100 h-16 fixed top-0 bg-white/40 backdrop-blur-2xl z-40">
                <div className="navbar-start space-x-2">
                    <label className="bg-white rounded-full swap swap-rotate z-40 md:hidden" >
                        <input type="checkbox" onClick={() => toggleMenu(!openMenu)} />
                        <Image src={ham} width={ham.width} height={ham.height} alt='ham svg' className="swap-off fill-current scale-75" />
                        <Image src={close} width={close.width} height={close.height} alt='ham svg' className="swap-on fill-current scale-75" />
                    </label>
                    <Link href={"/"} className="btn btn-ghost text-xl">
                        <Image src={logo} alt='logo' width={100} height={100} className=''/>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <NavItem />
                </div>
                <div className="navbar-end">
                    <LanguageChanger />
                    <Link href={"Auth/SignIn"} className="btn">
                        sign in
                        <RiLoginBoxFill size={"20px"}/>
                        </Link>
                </div>
            </div>
            <HamMenu openMenu={openMenu} />
        </>
    )
}

export default NavBar