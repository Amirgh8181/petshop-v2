"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl"

const NavItem = () => {
    const pathname = usePathname()
    console.log(pathname);
    
    const t = useTranslations("navItem")
    // navItem for render
    const navItem = [
        { name: t("Home"), href: "/" },
        { name: t("Shop"), href: "/Shop" },
        { name: t("Personality"), href: "/Question" },
        { name: t("Clinics"), href: "/Clinics" },
        { name: t("Shelters"), href: "/Shelters" },
    ]
    return (
        <ul className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-6">
            {navItem.map(item =>
                    <li key={item.href} className="text-3xl md:text-base xl:text-lg mx-2">
                        <Link href={item.href}
                            className=
                            {
                                `${pathname === `${item.href}` || pathname === `${item.href}/[slug]`
                                    ? "md:bg-darkPetBlue md:dark:bg-petBlue md:text-white bg-gray-200 text-petBlue"
                                    : "md:hover:text-white  md:hover:bg-darkPetBlue/20 md:dark:hover:bg-petBlue/20 hover:bg-gray-400 transition-colors duration-300"
                                } no-underline p-2 rounded-btn`
                            }
                        >
                            {item.name}
                        </Link>
                    </li>
                
            )}
        </ul>
    )
}
export default NavItem


