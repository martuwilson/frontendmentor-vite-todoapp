import { useEffect, useState } from "react";
import MoonIcon from "./icons/Moon"
import SunIcon from "./icons/Sun";


const initialStateDarkMode = localStorage.getItem("theme") === "dark" ? true : false

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)
  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", 'dark ')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", 'light')
    }
  }, [darkMode])
  

    return (
        <header className="container mx-auto px-4  pt-8 md:max-w-xl">
        <div className="flex justify-between ">
          <h1 className="uppercase text-white text-3xl font-bold letter tracking-[0.5em]">
            Tareas
          </h1>
          <button
          onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <SunIcon/> : <MoonIcon/>}
          </button>
           
        </div>

        

      </header>
    )
};

export default Header;