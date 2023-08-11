import React, { useContext, useRef } from "react";
// import { ThemeContext } from "../../App";
import { ThemeContext } from "../../context/themeContext";

const IconButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const btnRef = useRef(null);

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

  // console.log("btnRef -- ", btnRef.current);

  return (
    <>
      <button
        ref={btnRef}
        className={`btn btn-outline-${theme === "dark" ? "light" : "dark"}`}
        onClick={(e) => {
          toggleTheme(e);
        }}
      >
        set theme to {theme === "dark" ? "light" : "dark"}{" "}
      </button>
      <div>Now the theme is {theme}</div>
    </>
  );
};

export default IconButton;
