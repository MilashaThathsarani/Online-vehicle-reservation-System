import React from 'react';
import HomeFooterImg from '/public/images/homefooterimg.png';

function Home() {
  return (
    <div 
      className='flex justify-between items-center mt-8 h-[43vw] bg-no-repeat pl-6 border-b-2 border-white relative ' 
      style={{ 
        backgroundImage: "url('/images/Frame.png')", // Background image
        backgroundPosition: 'right top', // Align the background image to the top-right corner
        backgroundSize: '600px 600px', // Set custom width and height (e.g., 500px width, 600px height)
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      {/* Content Section */}
      <div className='flex flex-col gap-12 bg-white bg-opacity-70 p-6 rounded-lg z-10'>
        <h1 className='text-5xl leading-20 font-oswald font-bold ml-12 text-blue-950 animate-fadeInUp'>
          ACCOMPANY YOUR <br /> JOURNEY WITH COMFORT
        </h1>
        {/* <h1 className='text-xl ml-12'>
          Car rental services for various needs with guaranteed quality
        </h1> */}
        {/* <div className='flex gap-12'>
          <h1 className='text-xl leading-7 ml-12 mb-12 text-blue-900'>
            50 + <br /> Vehicles
          </h1>
          <h1 className='text-xl leading-7 ml-12 mb-12 text-blue-900'>
            1000 + <br /> Clients
          </h1>
        </div> */}

<div className='mt-7 '>
          <h3 className='text-2xl font-bold text-blue-900 mb-7 ml-12'>Ready to Rent a Car?</h3>
          <p className='text-gray-700 mb-6 ml-12'>Choose from our wide range of vehicles and enjoy a seamless rental experience.</p>
          <button
            className='bg-blue-900 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-800 transition-colors ml-12'
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Car Image */}
      <div>
        <img src="/images/car 2 1.png" alt="Car Background" className='w-[50vw] ml-30 z-10' />
      </div>

      

      {/* Footer Image */}
      <img 
        src={HomeFooterImg} 
        alt="Footer Background" 
        className='w-screen h-11 absolute bottom-3 left-0 z-0 px-30' 
      />
    </div>
  );
}

export default Home;