import React from 'react'
import  Logo from '/public/images/icon-247.svg'
import { CarTaxiFront } from 'lucide-react';

function NavBar() {
  return (
    <div className='w-full flex justify-between py-6 px-8 top-0 left-0 fixed z-50 min-h-[5vw] bg-black text-white'>
      
      {/* Logo */}
     <img src={Logo} alt="logo" className='w-10' />

     {/* navlinks */}
      <ul className='flex flex-row gap-12 items-center font-semibold'>
        <li className='cursor-pointer hover:text-amber-300 transition delay-75 p-3'>Home</li>
        <li className='cursor-pointer hover:text-amber-300 transition delay-75 p-3'>Services</li>
        <li className='cursor-pointer hover:text-amber-300 transition delay-75 p-3'>Vehicle Models</li>
        <li className='cursor-pointer hover:text-amber-300 transition delay-75 p-3'>Contact</li>
      </ul>

      <div className='bg-yellow-200 px-3 py-2 cursor-pointer text-red-900 gap-5 flex justify-center items-center rounded-xl' ><CarTaxiFront /><h1>Ishira Gandaya</h1></div>

    </div>
  )
}

export default NavBar