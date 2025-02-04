import React from 'react'
import NavBar from '../Component/NavBar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import Services from '../Pages/Services'

function HomeLayout() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar/>
        <Home/>
        <Services/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout