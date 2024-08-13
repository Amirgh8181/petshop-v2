import HamMenu from '../UI/NavBarSections/HamMenu/HamMenu'
import SwitchTheme from '../UI/NavBarSections/SwitchTheme/SwitchTheme'
import Logo from '../UI/Logo/Logo'
import HamMenuBtn from '../UI/Button/HamMenuBtn'
import OpacityContent from '../UI/Animation/OpacityContent'
import LanguageChanger from '../UI/NavBarSections/LanguageChanger'
import AuthSection from '../UI/NavBarSections/AuthSection'
import DesktopNavItem from '../UI/NavBarSections/NavItem/Desktop'

const NavBar = () => {

    return (
        <>
            <nav className='fixed top-0 bg-primary/50 origin-top backdrop-blur-2xl z-40 w-full' dir='ltr'>


                <OpacityContent delay={0.5} boxClass="navbar bg-transparent mx-auto" duration={1}>

                    <div className="navbar-start md:space-x-0 space-x-2">
                        <HamMenuBtn/>
                        <Logo />
                    </div>
                    <div className="navbar-center hidden md:block">
                        <DesktopNavItem />
                    </div>
                    <div className="navbar-end">
                        <AuthSection />
                        <LanguageChanger />
                        <SwitchTheme />
                    </div>
                </OpacityContent>
            </nav>
            <HamMenu/>
        </>
    )
}

export default NavBar