"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

export type themeType = "light" | "dark"
interface prop {
    children: React.ReactNode
}
//create context type
interface themeContextType {
    theme: themeType,
    changeTheme: (userSelectTheme: themeType) => void
}
//Create context default values
const themeContextDefaultValue: themeContextType = {
    theme: "light",
    changeTheme: (userSelectTheme: themeType) => { }
}
//create context
export const ThemeContext = createContext<themeContextType>(themeContextDefaultValue)



const ThemeProvider = ({ children }: prop) => {
    const [theme, setTheme] = useState<themeType>("light")
    console.log(theme);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light"

        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(storedTheme)
        document.documentElement.setAttribute("data-theme", storedTheme)

        setTheme(storedTheme as themeType)
    }, [])

    const changeTheme = (userSelectTheme: themeType) => {
        
        setTheme(userSelectTheme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(userSelectTheme)
        document.documentElement.setAttribute("data-theme", userSelectTheme)

        

        localStorage.setItem("theme", userSelectTheme)
    }


    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
                {children}
        </ThemeContext.Provider>
    )
}



export default ThemeProvider;