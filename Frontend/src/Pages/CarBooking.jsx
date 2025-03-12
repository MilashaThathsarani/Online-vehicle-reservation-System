import React, { useState } from 'react';

function CarBooking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', { name, email, phone, pickupDate, returnDate, carModel });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Car Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Full Name</label>
            <input 
              type='text' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input 
              type='email' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Phone Number</label>
            <input 
              type='tel' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Pick-up Date</label>
            <input 
              type='date' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Return Date</label>
            <input 
              type='date' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Car Model</label>
            <input 
              type='text' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default CarBooking;
