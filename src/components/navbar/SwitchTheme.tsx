import { MoonSvg, SunSvg } from '@/src/assets/svgs'
import { ThemeContext } from '@/src/context/ThemeContext'
import React, { useContext } from 'react'

const SwitchTheme = () => {
    const themeContext = useContext(ThemeContext)
    const changeMode = () => {
        const setTheme = themeContext?.theme === "light" ? "dark" : "light"
        themeContext?.changeTheme(setTheme)
    }
    return (
        <div className='btn w-[vmax] aspect-square' >
            <label className="swap swap-rotate grid place-items-center p-2">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onClick={() => changeMode()} className='flex justify-center items-center'/>
                {/* moon icon */}
                <MoonSvg className="swap-off w-full fill-current"/>

                {/* sun icon */}
                <SunSvg className="swap-on w-full fill-current"/>

            </label>
        </div>
    )
}

export default SwitchTheme