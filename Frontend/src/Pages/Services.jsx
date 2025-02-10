import React from 'react';

function Services() {
  const vehicles = [
    { name: 'Audi', type: 'Luxury', seats: 5, status: 'Available', image: 'https://source.unsplash.com/400x300/?audi' },
    { name: 'Toyota', type: 'Budget', seats: 5, status: 'Available', image: 'https://source.unsplash.com/400x300/?toyota' },
    { name: 'BMW', type: 'Luxury', seats: 5, status: 'Rented', image: 'https://source.unsplash.com/400x300/?bmw' },
    { name: 'Honda', type: 'Economy', seats: 5, status: 'Available', image: 'https://source.unsplash.com/400x300/?honda' },
    
  ];

  return (
    <div className='min-h-[35vw] bg-white py-10 px-6  border-b-2 border-gray-500'>
      <h2 className='text-2xl font-bold text-center mb-6'>Available Vehicles</h2>
      <div className='grid grid-cols-4 gap-6'>
        {vehicles.map((vehicle, index) => (
          <div key={index} className='bg-gray-100 shadow-md rounded-lg overflow-hidden p-4'>
            <img src={vehicle.image} alt={vehicle.name} className='w-full h-40 object-cover' />
            <h3 className='text-lg font-semibold mt-2'>{vehicle.name}</h3>
            <p className='text-gray-700'>Type: {vehicle.type}</p>
            <p className='text-gray-700'>Seats: {vehicle.seats}</p>
            <p className={`font-semibold ${vehicle.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{vehicle.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
