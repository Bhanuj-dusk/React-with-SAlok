import React, { useState } from "react";

const IconButton = ({theme, toggleTheme }) => {
  // const modeHandler = () =>{
  // modeHandler
  // }

  // console.log("theme", theme)
  // console.log(toggleTheme.toString())

//   const existingTheme =
//     localStorage.getItem("userPastSelection")
//       ? localStorage.getItem("userPastSelection")
//       : window.matchMedia("(prefers-color-scheme: light)").matches === true
//       ? "light"
//       : "dark";

//     const [theme, setTheme] = useState(existingTheme);
    
//     const toggleTheme = (()=>{
//         setTheme(theme === 'light' ? 'dark' : 'light');
//         localStorage.setItem("userPastSelection",theme);
//     })

  return (
  <>
    <button className= {`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'}`} onClick={toggleTheme}>set theme to {theme === 'dark' ? 'light' : 'dark'} </button>
    <div>
    Now the theme is {theme}
  </div>
  </>
  )
};

export default IconButton;