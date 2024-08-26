import { navItemData } from './data'
import NavItemRender from './NavItem'
import { useLocale, useTranslations } from 'next-intl'

const DesktopNavItem = () => {
    const t = useTranslations("navItem") 
    const local=useLocale()
    return (
        <ul className="hidden md:flex flex-row justify-center items-center" dir={`${local==="fa"?'rtl':'ltr'}`}>
            {navItemData.map(item =>
                <NavItemRender name={t(item.name)} href={item.href} key={item.href}/>
            )}
        </ul>

    )
}

export default DesktopNavItem