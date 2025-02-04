import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'


function App() {
  return (
   <Routes>
    <Route path='/' element= {<HomeLayout/>}/>
   </Routes>
  )
}

export default App