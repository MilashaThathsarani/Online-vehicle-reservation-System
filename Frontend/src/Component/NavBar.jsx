import React from 'react'
import  Logo from '/public/images/Frame 993.png'
import { CarTaxiFront } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='w-full flex justify-between py-1 px-13 top-0 left-0 fixed z-50 min-h-[5vw] bg-white text-blue-950 items-center text-md border-b-2 border-gray-500'>
      
      {/* Logo */}
     <img src={Logo} alt="logo" className='w-32' />

     {/* navlinks */}
      <ul className='flex flex-row gap-12 items-center font-semibold'>
      <Link to= '/home' ><li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Home</li></Link>
      <Link to= '/aboutus' > <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>About Us</li></Link>
      <Link to= '/services' ><li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Services</li></Link>
        <Link to= '/vehicles' ><li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'> Vehicle Models</li></Link>
        <Link to= '/faq' ><li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>FAQ</li></Link>
      </ul>

    <Link to= '/vehicles' > <div className='bg-blue-900 py-1 px-3 cursor-pointer text-white gap-5 flex justify-center items-center rounded-xl h-12 ' ><CarTaxiFront /><h1>Book</h1></div>
    </Link>
    </div>
  )
}

export default NavBar