import { ThemeContext } from '@/src/context/ThemeContext'
import React, { useContext } from 'react'
import { CiSun } from 'react-icons/ci'
import { FaMoon } from 'react-icons/fa'

const SwitchTheme = () => {
    const themeContext = useContext(ThemeContext)
    const changeMode = () => {
        const setTheme = themeContext?.theme === "light" ? "dark" : "light"
        themeContext?.changeTheme(setTheme)
    }
    return (
        <div className='navbarBtn' >
            <label className="swap swap-rotate grid place-items-center">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onClick={() => changeMode()} className='flex justify-center items-center'/>
                {/* moon icon */}
                <FaMoon className="dark:hidden block fill-current text-2xl text-darkPetBlue"/>
                {/* sun icon */}
                <CiSun  className="dark:block hidden fill-current text-2xl text-yellow-500"/>
            </label>
        </div>
    )
}

export default SwitchTheme