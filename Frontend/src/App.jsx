import React from 'react'
import { Navbar } from './components/index.js'
import { Outlet, useLocation } from 'react-router'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  

  React.useEffect(()=>{
    if(location.pathname==="/"){
      navigate("/home")
    }
  },[])

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
