import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import AdminHome from './Admin/AdminHome'
import RiderLayout from './Layout/RiderLayout'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import FAQ from './Pages/FAQ'


function App() {
  return (
   <Routes>
    <Route path='/' element= {<HomeLayout/>}/>
    <Route path='/admin/*' element = {<AdminHome/>}/>
    <Route path='/vehicles' element= {<RiderLayout/>}/>
    <Route path='/home' element= {<Home/>}/>
    <Route path='/aboutus' element= {<AboutUs/>}/>
    <Route path='/services' element= {<Services/>}/>
    <Route path='/faq' element= {<FAQ/>}/>
   </Routes>
  )
}

export default App