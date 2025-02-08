import React from 'react'
import  Logo from '/public/images/icon-247.svg'
import { CarTaxiFront } from 'lucide-react';

function NavBar() {
  return (
    <div className='w-full flex justify-between py-1 px-13 top-0 left-0 fixed z-50 min-h-[5vw] bg-white text-blue-950 items-center text-md border-b-2 border-gray-500'>
      
      {/* Logo */}
     <img src={Logo} alt="logo" className='w-10' />

     {/* navlinks */}
      <ul className='flex flex-row gap-12 items-center font-semibold'>
        <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Home</li>
        <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>About Us</li>
        <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Services</li>
        <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Vehicle Models</li>
        <li className='cursor-pointer hover:text-blue-700 transition delay-75 p-3'>Contact</li>
      </ul>

      <div className='bg-blue-200 py-1 px-3 cursor-pointer text-black gap-5 flex justify-center items-center rounded-xl h-12 ' ><CarTaxiFront /><h1>Book</h1></div>

    </div>
  )
}

export default NavBar