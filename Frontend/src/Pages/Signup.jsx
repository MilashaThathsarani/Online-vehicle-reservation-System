import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaIdCard, FaImage } from 'react-icons/fa';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [nic, setNic] = useState('');
  const [nicFront, setNicFront] = useState(null);
  const [nicBack, setNicBack] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Username:', username, 'Email:', email, 'Password:', password, 'Phone:', phone, 'NIC:', nic);
      console.log('NIC Front:', nicFront, 'NIC Back:', nicBack, 'Profile Picture:', profilePicture);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!nic) newErrors.nic = 'NIC number is required';
    if (!nicFront) newErrors.nicFront = 'NIC front image is required';
    if (!nicBack) newErrors.nicBack = 'NIC back image is required';
    if (!profilePicture) newErrors.profilePicture = 'Profile picture is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-950'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl'>
        {/* Logo or Branding */}
        <div className='flex items-center justify-center mb-6'>
          <img
            src='public/images/img1.jfif'
            alt='Logo'
            className='w-32'
          />
          {/* <h1 className='text-2xl font-bold text-blue-900'>Your Brand</h1> */}
        </div>

        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Customer Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Left Column */}
            <div>
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
                  />
                  <FaUser className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.username && <p className='text-red-500 text-sm mt-1'>{errors.username}</p>}
              </div>

              {/* Email Field */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Email</label>
                <div className='relative'>
                  <input
                    type='email'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                  />
                  <FaEnvelope className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Password</label>
                <div className='relative'>
                  <input
                    type='password'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                  />
                  <FaLock className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
              </div>

              {/* Phone Field */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Phone Number</label>
                <div className='relative'>
                  <input
                    type='tel'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your phone number'
                  />
                  <FaPhone className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* NIC Field */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>NIC Number</label>
                <div className='relative'>
                  <input
                    type='text'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    placeholder='Enter your NIC number'
                  />
                  <FaIdCard className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.nic && <p className='text-red-500 text-sm mt-1'>{errors.nic}</p>}
              </div>

              {/* NIC Front Image */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>NIC Front Image</label>
                <div className='relative'>
                  <input
                    type='file'
                    accept='image/*'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => setNicFront(e.target.files[0])}
                  />
                  <FaImage className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.nicFront && <p className='text-red-500 text-sm mt-1'>{errors.nicFront}</p>}
              </div>

              {/* NIC Back Image */}
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>NIC Back Image</label>
                <div className='relative'>
                  <input
                    type='file'
                    accept='image/*'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => setNicBack(e.target.files[0])}
                  />
                  <FaImage className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.nicBack && <p className='text-red-500 text-sm mt-1'>{errors.nicBack}</p>}
              </div>

              {/* Profile Picture */}
              <div className='mb-6'>
                <label className='block text-gray-700 mb-2'>Profile Picture</label>
                <div className='relative'>
                  <input
                    type='file'
                    accept='image/*'
                    className='w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                  />
                  <FaImage className='absolute left-3 top-3 text-gray-400' />
                </div>
                {errors.profilePicture && <p className='text-red-500 text-sm mt-1'>{errors.profilePicture}</p>}
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;