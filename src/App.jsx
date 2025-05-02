import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router.jsx'


function App() {
  

  return (
    <>
    <RouterProvider router={createBrowserRouter(router)} />
     
    </>
  )
}

export default App
