import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

function Footer() {
  return (
    <footer className='bg-blue-950 text-white py-10 mt-10'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Grid layout for footer content */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {/* Contact Information */}
          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='mt-2'>Email: support@carrental.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Car Rental Street, City, Country</p>
          </div>

          {/* Quick Links */}
          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href='/about' className='hover:text-blue-400 transition-colors'>About Us</a></li>
              <li><a href='/services' className='hover:text-blue-400 transition-colors'>Services</a></li>
              <li><a href='/faq' className='hover:text-blue-400 transition-colors'>Vehicle Models</a></li>
              <li><a href='/terms' className='hover:text-blue-400 transition-colors'>FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Subscribe to Our Newsletter</h3>
            <form className='flex flex-col space-y-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className='p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <button
                type='submit'
                className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
                <FaFacebook className='w-6 h-6' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
                <FaTwitter className='w-6 h-6' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
                <FaInstagram className='w-6 h-6' />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
                <FaLinkedin className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-gray-700 pt-6 mt-8 text-center'>
          <p>&copy; {new Date().getFullYear()} Car Rental. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;