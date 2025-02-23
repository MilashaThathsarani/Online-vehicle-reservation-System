import React from 'react';
import Car from '/public/images/Audi 1.png'; // Ensure the path is correct
import { FaCar, FaUsers, FaSmile, FaAward } from 'react-icons/fa'; // Icons for stats

function AboutUs() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white py-20 px-6 relative'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{ backgroundImage: "url('/images/background.png')" }} // Add your background image path
      ></div>

      <div className='relative z-10 max-w-6xl w-full'>
        {/* Title */}
        <h2 className='text-4xl font-bold text-center mb-8 text-blue-900'>About Us</h2>

        {/* Content Section */}
        <div className='bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center'>
          {/* Image Section */}
          <div className='w-full md:w-1/2 mb-8 md:mb-0 md:mr-8'>
            <img
              src={Car}
              alt='Car'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/2 text-gray-700'>
            <p className='mb-6 text-lg leading-relaxed'>
              Welcome to <span className='font-semibold text-blue-900'>RENT CARS</span>! We are dedicated to providing the best vehicle rental services.
              Our mission is to offer top-quality cars at affordable prices with excellent customer service.
            </p>
            <p className='mb-6 text-lg leading-relaxed'>
              Whether you need a luxury vehicle for a special event or a budget-friendly car for daily use,
              we have a variety of options to suit your needs. Your satisfaction is our priority!
            </p>

            {/* Stats Section */}
            <div className='grid grid-cols-2 gap-6 mt-6'>
              <div className='flex items-center space-x-4'>
                <FaCar className='w-8 h-8 text-blue-900' />
                <div>
                  <p className='text-2xl font-bold'>50+</p>
                  <p className='text-gray-600'>Vehicles</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <FaUsers className='w-8 h-8 text-blue-900' />
                <div>
                  <p className='text-2xl font-bold'>1000+</p>
                  <p className='text-gray-600'>Clients</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <FaSmile className='w-8 h-8 text-blue-900' />
                <div>
                  <p className='text-2xl font-bold'>98%</p>
                  <p className='text-gray-600'>Satisfaction</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <FaAward className='w-8 h-8 text-blue-900' />
                <div>
                  <p className='text-2xl font-bold'>5+</p>
                  <p className='text-gray-600'>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section
        <div className='mt-12 text-center'>
          <h3 className='text-2xl font-bold text-blue-900 mb-4'>Ready to Rent a Car?</h3>
          <p className='text-gray-700 mb-6'>Choose from our wide range of vehicles and enjoy a seamless rental experience.</p>
          <button
            className='bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition-colors'
          >
            Book Now
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;