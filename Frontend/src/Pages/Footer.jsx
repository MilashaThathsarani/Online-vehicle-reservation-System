import React from 'react';

function Footer() {
  return (
    <footer className='bg-blue-950 text-white py-6 mt-10'>
      <div className='max-w-4xl mx-auto text-center'>
        <h3 className='text-lg font-semibold'>Contact Us</h3>
        <p className='mt-2'>Email: support@carrental.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Car Rental Street, City, Country</p>
        <div className='mt-4'>
          <p>&copy; {new Date().getFullYear()} Car Rental. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;