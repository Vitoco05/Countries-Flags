import { useEffect, useState } from "react"

const Navbar = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    isDarkTheme
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
  }, [isDarkTheme])

  return (
    <nav className="flex justify-between p-4 py-6 lightTheme darkTheme">
      <h1>Where in the world?</h1>

      <button onClick={handleChangeTheme} className="outline-none flex items-center gap-1 font-semibold">
        {
          isDarkTheme
          ?<i className="fa-solid fa-moon"></i>
          :<i className="fa-regular fa-moon"></i>
        }
      Dark Mode
      </button>
    </nav>
  )
}

export default Navbar
 