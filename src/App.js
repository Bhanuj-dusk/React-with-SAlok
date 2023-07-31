import IconButton from "./component/iconbutton";
import React, { useEffect, useState, createContext } from "react";
import { ThemeContextProvider } from "./context/themeContext";

export const ThemeContext = createContext();
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ThemeContextProvider>
            <IconButton />
          </ThemeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
