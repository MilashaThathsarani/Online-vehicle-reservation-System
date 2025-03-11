import React, { useEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { gsap } from 'gsap';
import NewImage from '/public/images/newphoto.jpg'; // Replace with your new image path

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.querySelectorAll('h1, div');

    // Landing animation for text
    gsap.fromTo(
      textElements,
      { opacity: 0, y: 50 }, // Start hidden and slightly shifted down
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.3, // Stagger effect for a sequential animation
      }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full h-screen flex flex-col mt-20"
    >
      {/* Text Section */}
      <div
        ref={textRef}
        className="w-full h-[40vh] flex flex-col lg:flex-row justify-center items-center bg-white lg:gap-[10rem] px-5 lg:px-0 text-center lg:text-left"
      >
        <h1 className="font-walsheim text-[#23233C] text-4xl lg:text-5xl font-medium leading-tight">
          Explore the World,
          <br /> One Ride at a Time
          <br /> with Us
        </h1>
        <div className="flex flex-col gap-5 mt-5 lg:mt-0">
          <h1 className="font-walsheim text-[#23233C] text-base lg:text-lg font-medium">
            Whether it's a city tour or a countryside escape, we offer
            <br className="hidden lg:block" /> unmatched comfort, safety, and reliability on every journey.
          </h1>
          <div className="flex gap-3 lg:gap-5 justify-center lg:justify-start">
            <div className="border-2 w-8 h-8 flex justify-center items-center border-[#23233C] rounded-full">
              <MoveRight className="w-5 h-5" />
            </div>
            <h1 className="font-walsheim text-[#23233C] text-base lg:text-lg font-medium">
              Start Your Journey
            </h1>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full h-[60vh] relative overflow-hidden"
      >
        <img
          src={NewImage}
          alt="Explore the World"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;