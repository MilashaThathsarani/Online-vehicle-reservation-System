import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-950'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        {/* Logo or Branding */}
        <div className='flex items-center justify-center mb-6'>
          <img
            src='public/images/Frame 993.png'
            alt='Logo'
            className='w-32'
          />
          {/* <h1 className='text-2xl font-bold text-blue-900'>RENT CARS</h1> */}
        </div>

        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Username</label>
            <div className='relative'>
              <input
                type='text'
                className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
                required
              />
              <FaUser className='absolute left-3 top-3 text-gray-400' />
            </div>
          </div>

          {/* Password Field */}
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <div className='relative'>
              <input
                type='password'
                className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                required
              />
              <FaLock className='absolute left-3 top-3 text-gray-400' />
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className='text-right mb-6'>
            <a href='/forgot-password' className='text-blue-600 hover:text-blue-800 text-sm'>
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button
            type='button'
            className='w-full mt-4 bg-blue-950 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300'
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className='flex items-center my-6'>
          <div className='flex-1 h-px bg-gray-300'></div>
          <span className='mx-4 text-gray-500'>or</span>
          <div className='flex-1 h-px bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
}

export default Login;