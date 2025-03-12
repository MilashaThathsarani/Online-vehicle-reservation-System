import React, { useRef } from 'react';

function AboutPage2() {
  const titleRef = useRef(null);

  // Split the title into individual letters
  const titleText = "Innovating the Future";
  const letters = titleText.split('');

  // Function to handle mouse enter/leave for bump effect
  const handleMouseEnter = (e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.transition = 'transform 0.2s ease';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <div ref={titleRef} className="font-walsheim text-6xl mb-8">
          <h1>
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="max-w-2xl text-xl">
          <p>
            At the heart of everything we do lies a passion for innovation. We believe in pushing boundaries,
            challenging the status quo, and creating solutions that inspire. From cutting-edge technology to
            sustainable practices, we're building a future that works for everyone.
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1542372483-c18275e83e45?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Futuristic tech-themed image
        alt="Innovating the Future"
        className="absolute inset-0 object-cover w-full h-full z-0"
        onError={(e) => {
          e.target.style.display = 'none'; // Hide the image if it fails to load
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div> {/* Overlay for better text readability */}
    </div>
  );
}

export default AboutPage2;