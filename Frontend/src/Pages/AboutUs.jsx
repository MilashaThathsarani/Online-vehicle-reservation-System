import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Car from '/public/images/Audi 1.png'; // Ensure the path is correct

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const titleRef = useRef(null);
  const carImageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for the car image
    gsap.fromTo(
      carImageRef.current,
      { opacity: 0, scale: 0.8, rotate: -10 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carImageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden'
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', // Gradient background
      }}
    >
      {/* Overlay for subtle texture */}
      <div className='absolute inset-0 bg-noise opacity-10'></div>

      <div className='relative z-10 max-w-7xl w-full'>
        {/* Title */}
        <h2
          ref={titleRef}
          className='text-4xl  font-bold text-center mt-2 py-4 text-white'
        >
          About Us
        </h2>

        {/* Content Container */}
        <div className='bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8'>
          {/* Image Section */}
          <div
            ref={carImageRef}
            className='w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105'
          >
            <img
              src={Car}
              alt='Car'
              className='w-full h-auto rounded-2xl shadow-2xl'
            />
          </div>

          {/* Text Section */}
          <div
            ref={textRef}
            className='w-full md:w-1/2 text-white space-y-6'
          >
            <p className='text-xl leading-relaxed'>
              Welcome to <span className='font-bold text-yellow-400'>DriveEase</span>, where luxury meets convenience. We specialize in providing premium vehicle rentals that redefine your travel experience.
            </p>
            <p className='text-xl leading-relaxed'>
              Our fleet includes the latest models from top brands, ensuring you drive in style and comfort. From sleek sedans to powerful SUVs, we’ve got the perfect ride for every occasion.
            </p>
            <p className='text-xl leading-relaxed'>
              At DriveEase, we’re committed to delivering exceptional service, competitive pricing, and 24/7 support. Your journey begins with us.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-5'></div>
    </div>
  );
}

export default AboutUs;