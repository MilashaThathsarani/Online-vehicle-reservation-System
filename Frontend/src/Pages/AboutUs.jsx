import React from 'react';
import  Car from '/public/images/view-3d-car.png'

function AboutUs() {
  return (
    <div className='min-h-28 flex flex-col items-center justify-center bg-white py-10 px-6'>
      <h2 className='text-3xl font-bold text-center mb-5'>About Us</h2>
      <div className='max-w-6xl bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center'>
        <img src = {Car} alt="Car" className='w-full md:w-1/2 rounded-lg mb-2 md:mb-0 md:mr-6'/>
        <div className='text-gray-700 text-50px'>
          <p className='mb-4'>
            Welcome to our company! We are dedicated to providing the best vehicle rental services.
            Our mission is to offer top-quality cars at affordable prices with excellent customer service.
          </p>
          <p>
            Whether you need a luxury vehicle for a special event or a budget-friendly car for daily use,
            we have a variety of options to suit your needs. Your satisfaction is our priority!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
