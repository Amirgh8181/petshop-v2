"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const NavItem = () => {
    const pathname = usePathname()
    // navItem for render
    const navItem = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/Shop" },
        { name: "Clinics", href: "/Clinics" },
        { name: "Question", href: "/Question" },
        { name: "Shelters", href: "/Shelters" },
    ]
    return (
        <ul className="flex flex-col lg:flex-row justify-center items-center lg:space-x-2 lg:space-y-0 space-y-6">
            {navItem.map(item =>
                <li key={item.href} className="text-3xl md:text-base xl:text-lg text-white md:text-black">
                    <Link href={item.href}
                        className=
                        {
                            `link ${pathname === item.href ?
                                "md:bg-petBlue md:text-white bg-gray-200 text-petBlue" :
                                "md:hover:text-petBlue md:hover:bg-petBlue/20 hover:bg-gray-400 transition-colors duration-300"
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


