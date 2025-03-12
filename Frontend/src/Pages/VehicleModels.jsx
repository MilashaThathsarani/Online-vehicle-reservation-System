import React from 'react';
import { useNavigate } from 'react-router-dom';

function VehicleModels() {
  const navigate = useNavigate();

  // Example: Replace this with your actual authentication logic
  const isLoggedIn = false; // Assume the user is not logged in

  const vehicles = [
    { name: 'Audi', type: 'Luxury', seats: 5, status: 'Available', image: 'public/images/image 13.png' },
    { name: 'Toyota', type: 'Budget', seats: 5, status: 'Available', image: 'https://source.unsplash.com/400x300/?toyota' },
    { name: 'BMW', type: 'Luxury', seats: 5, status: 'Rented', image: 'https://source.unsplash.com/400x300/?bmw' },
    { name: 'Honda', type: 'Economy', seats: 5, status: 'Available', image: 'https://source.unsplash.com/400x300/?honda' },
    // Add more vehicles here
  ];

  // Function to handle the "Book Now" button click
  const handleBookNow = (vehicle) => {
    if (!isLoggedIn) {
      // Redirect to the login page if the user is not logged in
      navigate('/signup'); // Replace '/login' with your actual login route
      return;
    }

    // If the user is logged in, proceed with booking
    alert(`Booking ${vehicle.name} (${vehicle.type})`);
    // You can replace this with a modal or redirect to a booking page
  };

  return (
    <div className='min-h-screen bg-white py-10 px-6'>
      <h2 className='text-2xl font-bold text-center mb-6'>Available Vehicles</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {vehicles.map((vehicle, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden p-4 border-1 border-blue-900'>
            {/* Vehicle Image */}
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className='w-full h-32 md:h-40 lg:h-48 object-cover'
            />

            {/* Vehicle Details */}
            <h3 className='text-lg font-semibold mt-2'>{vehicle.name}</h3>
            <p className='text-gray-700'>Type: {vehicle.type}</p>
            <p className='text-gray-700'>Seats: {vehicle.seats}</p>
            <p className={`font-semibold ${vehicle.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
              {vehicle.status}
            </p>

            {/* Book Now Button */}
            <button
              onClick={() => handleBookNow(vehicle)}
              className={`w-full mt-4 py-2 rounded-lg font-semibold ${
                vehicle.status === 'Available'
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              disabled={vehicle.status !== 'Available'}
            >
              {vehicle.status === 'Available' ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleModels;