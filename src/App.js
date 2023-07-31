import IconButton from "./component/iconbutton";
import React, { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext()
function App() {

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
      
      useEffect(()=>{
        document.body.setAttribute("data-bs-theme",theme)
        localStorage.setItem("userPastSelection",theme);
    },[theme])


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ThemeContext.Provider value={{theme, toggleTheme}}>
              <IconButton/>
          </ThemeContext.Provider>
          {/* <Main/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
