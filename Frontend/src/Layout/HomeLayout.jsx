import React from 'react'
import NavBar from '../Component/NavBar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import Services from '../Pages/Services'
import AboutUs from '../Pages/AboutUs'
import FAQ from '../Pages/FAQ'
import Footer from '../Pages/Footer'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import CarBooking from '../Pages/CarBooking'
import VehicleModels from '../Pages/VehicleModels'
import AdminPanel from '../Pages/AdminPanel'
import Dashboard from '../Pages/DashBoard'
import UsersManage from '../Pages/UsersManage'
import CarsManage from '../Pages/CarsManage'

function HomeLayout() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <VehicleModels/>
        <FAQ/>
        <Login/>
        <Signup/>
        <CarBooking/>
        <AdminPanel/>
        <Dashboard/>
        <UsersManage/>
        <CarsManage/>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout