import React from 'react';

function Services() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h2 className='text-3xl font-bold text-center mb-6'>Our Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {['Luxury Cars', 'Budget Cars', 'SUVs', 'Electric Cars'].map((service, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-md text-center border-blue-900'>
            <h3 className='text-xl font-semibold mb-2'>{service}</h3>
            <p className='text-gray-600'>Experience the best car rental service with our {service.toLowerCase()}.</p>
          </div>
        ))}
      </div>
      
      <h2 className='text-3xl font-bold text-center mt-12 mb-6'>Why Choose Us?</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[
          { title: 'Affordable Prices', desc: 'We offer competitive pricing with no hidden charges.' },
          { title: 'Wide Selection', desc: 'Choose from a variety of vehicles to suit your needs.' },
          { title: '24/7 Support', desc: 'Our customer support team is available round the clock.' },
          { title: 'Easy Booking', desc: 'Simple and fast booking process with flexible options.' },
          { title: 'Well-Maintained Cars', desc: 'Our vehicles are regularly serviced and well-maintained.' },
          { title: 'Customer Satisfaction', desc: 'We prioritize customer satisfaction and high-quality service.' }
        ].map((reason, index) => (
          <div key={index} className='bg-blue-900 p-4 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold mb-2 text-white'>{reason.title}</h3>
            <p className='text-white'>{reason.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
