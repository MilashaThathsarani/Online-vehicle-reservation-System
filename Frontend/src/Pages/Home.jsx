import React from 'react';

function Home() {
  return (
    <div 
      className='flex justify-between items-center mt-8 min-h-screen bg-cover bg-center bg-no-repeat pl-6 border-b-2 border-gray-500' 
      style={{ backgroundImage: "url('/images/images6.jpg')" }} // Replace with your actual image path
    >
      <div className='flex flex-col gap-12 bg-white bg-opacity-70 p-6 rounded-lg'>
        <h1 className='text-6xl leading-20 font-oswald font-bold ml-12'>
          ACCOMPANY YOUR <br /> JOURNEY WITH COMFORT
        </h1>
        <h1 className='text-xl ml-12'>
          Car rental services for various needs with guaranteed quality
        </h1>
        <div className='flex gap-12'>
          <h1 className='text-xl leading-7 ml-12 mb-12'>
            50+ <br /> Vehicles
          </h1>
          <h1 className='text-xl leading-7 ml-12 mb-12'>
            10k+ <br /> Clients
          </h1>
        </div>
      </div>
      <div>
        <img src="/images/view-3d-car.png" alt="Car Background" className='w-[45vw] mr-12' />
      </div>
    </div>
  );
}

export default Home;
