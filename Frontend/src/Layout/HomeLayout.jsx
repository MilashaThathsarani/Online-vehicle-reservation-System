import React from 'react'
import NavBar from '../Component/NavBar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import Services from '../Pages/Services'
import AboutUs from '../Pages/AboutUs'
import FAQ from '../Pages/FAQ'

function HomeLayout() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <FAQ/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout