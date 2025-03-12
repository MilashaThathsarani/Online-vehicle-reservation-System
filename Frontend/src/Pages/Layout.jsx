import React, { useState, useEffect } from 'react';
import Hero from '../Pages/Hero';
import Navbar from '../Pages/Navbar';
import HeroSub from '../Pages/HeroSub';
import Service from '../Pages/Service';
import Safety from '../Pages/Safety';
import Footer from '../Pages/Footer';
import { Outlet } from 'react-router-dom';
import Faq from '../Pages/Faq';
import AboutUs from './Aboutus';
import AboutPage2 from '../AboutPage2';
 // Import the Loader component

function Layout() {


  return (
    <>
      
      <div className='w-full'>
        {/*landing page content */}
        <Navbar />
        <Hero />
        <Safety />
        <Faq />
        <Footer />
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;