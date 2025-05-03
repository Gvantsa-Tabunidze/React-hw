import { useEffect, useState } from 'react'
import './App.css'
import useLocalStorage from './Hooks/ThemeSwitcher'
import useWindowResize from './Hooks/WindowSize'

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false)
  const {width}= useWindowResize()
  const isDesktop = width > 576;

  useEffect(()=>{
    if(!isDesktop && darkMode){
      setDarkMode(false)
    }
  }, [isDesktop, darkMode])

  // Apply/remove 'dark' class on body
  useEffect(()=>{
    document.body.classList.toggle('dark', darkMode && isDesktop)
  },  [darkMode, isDesktop])

  const handleToggle = () => {
    if (isDesktop) {
      setDarkMode(prev => !prev);
    }
  };

  return (
    <>
    <div className="button-div">
      <button className="Toggle-button" 
      onClick={handleToggle}>
      Swith
      <span>
        {darkMode && isDesktop
        ? <i className="fa-regular fa-moon" ></i>
        : <i className="fa-solid fa-sun"></i>}
        </span>
        </button>
        <div className="content">
        <h1>Hello, {darkMode && isDesktop ?  'Dark' : 'Light'} Mode!</h1>
        </div>
    </div>
    </>
  )
}

export default App
