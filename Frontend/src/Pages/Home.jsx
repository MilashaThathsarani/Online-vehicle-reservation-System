import React from 'react'
import  Bgcar from '/public/images/view-3d-car.png'
import { Heading1 } from 'lucide-react'

function Home() {
  return (
    <><div className='flex justify-between items-center mt-8 min-h-screen bg-white pl-6'>

       <h1 className='text-6xl leading-25 font-oswald font-bold ml-7 mb-55'>ACCOMPANY YOUR <br/> JOURNEY WITH COMFORT</h1>

       <div className='flex w-[25vw] h-[35vw] right-30 relative min-h-[30vw] bg-blue-950 text-white opacity-0.3'>

       <img src={Bgcar} alt="bgcar" className='z-10 w-[100vw] absolute left-[-200px] mt-20' />
       </div>

    </div>
   
    </>
  )
}

export default Home