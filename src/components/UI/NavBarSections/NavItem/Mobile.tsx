import React from 'react'
import TranslateAnimation from '../../Animation/TranslateAnimation'
import { navItemData } from './data'
import NavItemRender from './NavItem'
import { useTranslations } from 'next-intl'

const MobileNavItem = ({ toggle }: { toggle: (arg: boolean) => void }) => {
    const t = useTranslations("navItem")
    return (
        <ul className="md:hidden flex flex-col justify-center items-center space-y-6">
            {navItemData.map((item, index) =>

                <TranslateAnimation delay={index * 0.3} once yVal={20} key={item.href}>
                    <span onClick={() => toggle(false)}>
                        <NavItemRender name={t(item.name)} href={item.href} />
                    </span>
                </TranslateAnimation>
            )}
        </ul>

    )
}

export default MobileNavItem