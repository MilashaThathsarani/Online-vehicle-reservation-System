import React from 'react'
import CarsManage from '../Pages/CarsManage'
import { Outlet } from 'react-router-dom'
import VehicleModels from '../Pages/VehicleModels'

function RiderLayout() {
  return (
    <div><VehicleModels/>
    <Outlet/>
    
    
    
    </div>

  )
}

export default RiderLayout