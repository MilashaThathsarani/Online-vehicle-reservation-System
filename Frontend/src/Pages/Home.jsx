import React from 'react'
import  Bgcar from '/public/images/view-3d-car.png'
import { Heading1 } from 'lucide-react'

function Home() {
  return (
  <div className='flex justify-between items-center mt-8 min-h-screen bg-white pl-6 border-b-2 border-gray-500'>
    <div className='flex flex-col gap-13'>
      <h1 className='text-6xl leading-25 font-oswald font-bold ml-11'>ACCOMPANY YOUR <br/> JOURNEY WITH COMFORT</h1>
      <h1 className='text-xl ml-11'>Car rent services for varrious with guranted quality</h1>
    <div className='flex'>
      <h1 className='text-xl leading-7 ml-13 mb-15'>50+ <br/> Vehicles</h1>
      <h1 className='text-xl leading-7 ml-13 mb-15'>10k+ <br/> Clients </h1>
    </div> 
    </div>
    <div>
      <img src={Bgcar} alt="bgcar" className='w-[45vw] mr-15 '/> 
    </div>

  </div>

  )
}

export default Home



