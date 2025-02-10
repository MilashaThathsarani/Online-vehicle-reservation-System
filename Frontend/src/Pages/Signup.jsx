import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nic, setNic] = useState('');
  const [nicFront, setNicFront] = useState(null);
  const [nicBack, setNicBack] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Email:', email, 'Password:', password, 'NIC:', nic);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-950'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Username</label>
            <input 
              type='text' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <label className='block text-gray-700'>Password</label>
            <input 
              type='password' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>NIC Number</label>
            <input 
              type='text' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>NIC Front Image</label>
            <input 
              type='file' 
              accept='image/*' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              onChange={(e) => setNicFront(e.target.files[0])}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>NIC Back Image</label>
            <input 
              type='file' 
              accept='image/*' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              onChange={(e) => setNicBack(e.target.files[0])}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Profile Picture</label>
            <input 
              type='file' 
              accept='image/*' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              onChange={(e) => setProfilePicture(e.target.files[0])}
              required
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;