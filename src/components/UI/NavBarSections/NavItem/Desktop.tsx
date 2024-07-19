import React from 'react'
import { navItemData } from './data'
import NavItemRender from './NavItem'
import { useTranslations } from 'next-intl'

const DesktopNavItem = () => {
    const t = useTranslations("navItem")
    return (
        <ul className="hidden md:flex flex-row justify-center items-center">
            {navItemData.map(item =>
                <NavItemRender name={t(item.name)} href={item.href} />
            )}
        </ul>

    )
}

export default DesktopNavItem