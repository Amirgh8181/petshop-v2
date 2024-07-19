"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { NavItemProp } from "./data"
import { useEffect, useState } from "react"

const NavItemRender = ({ name, href }:  NavItemProp ) => {
    const pathname = usePathname()
    const isCurrent = pathname.split("/")[1] === href.split("/")[1];
    return (

        <li key={href} className="text-3xl md:text-base xl:text-lg mx-2">
            <Link href={href}
                className=
                {
                    `${isCurrent
                        ? "md:bg-darkPetBlue md:dark:bg-petBlue md:text-white bg-gray-200 text-petBlue"
                        : "md:hover:text-white  md:hover:bg-darkPetBlue/20 md:dark:hover:bg-petBlue/20 hover:bg-gray-400 transition-colors duration-300"
                    } no-underline p-2 rounded-btn`
                }
            >
                {name}
            </Link>
        </li>

    )
}
export default NavItemRender


