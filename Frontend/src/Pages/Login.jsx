import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Login</h2>
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
            <label className='block text-gray-700'>Password</label>
            <input 
              type='password' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
            Login
          </button>
          <button type='button' className='w-full mt-4 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
