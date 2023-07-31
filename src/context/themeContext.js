import {React, createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const existingTheme =
    localStorage.getItem("userPastSelection")
      ? localStorage.getItem("userPastSelection")
      : window.matchMedia("(prefers-color-scheme: light)").matches === true
      ? "light"
      : "dark";
    
    const [theme, setTheme] = useState(existingTheme);
    
    const toggleTheme = (()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
      })

      useEffect(() => {
        document.body.setAttribute("data-bs-theme", theme);
        localStorage.setItem("userPastSelection", theme);
      }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}