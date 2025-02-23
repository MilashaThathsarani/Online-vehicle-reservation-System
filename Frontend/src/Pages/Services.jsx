import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaMoneyBillAlt, FaShuttleVan, FaChargingStation } from 'react-icons/fa'; // Icons for services
import { FaHandHoldingUsd, FaListAlt, FaHeadset, FaCalendarCheck, FaTools, FaSmile } from 'react-icons/fa'; // Icons for "Why Choose Us"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

function Services() {
  // Map services to icons
  const services = [
    { name: 'Luxury Cars', icon: <FaCar className="w-12 h-12 mb-4 text-blue-900" /> },
    { name: 'Budget Cars', icon: <FaMoneyBillAlt className="w-12 h-12 mb-4 text-blue-900" /> },
    { name: 'SUVs', icon: <FaShuttleVan className="w-12 h-12 mb-4 text-blue-900" /> },
    { name: 'Electric Cars', icon: <FaChargingStation className="w-12 h-12 mb-4 text-blue-900" /> },
  ];

  // Map reasons to icons
  const reasons = [
    { title: 'Affordable Prices', desc: 'We offer competitive pricing with no hidden charges.', icon: <FaHandHoldingUsd className="w-12 h-12 mb-4 text-white" /> },
    { title: 'Wide Selection', desc: 'Choose from a variety of vehicles to suit your needs.', icon: <FaListAlt className="w-12 h-12 mb-4 text-white" /> },
    { title: '24/7 Support', desc: 'Our customer support team is available round the clock.', icon: <FaHeadset className="w-12 h-12 mb-4 text-white" /> },
    { title: 'Easy Booking', desc: 'Simple and fast booking process with flexible options.', icon: <FaCalendarCheck className="w-12 h-12 mb-4 text-white" /> },
    { title: 'Well-Maintained Cars', desc: 'Our vehicles are regularly serviced and well-maintained.', icon: <FaTools className="w-12 h-12 mb-4 text-white" /> },
    { title: 'Customer Satisfaction', desc: 'We prioritize customer satisfaction and high-quality service.', icon: <FaSmile className="w-12 h-12 mb-4 text-white" /> },
  ];

  return (
    <div className='min-h-screen bg-white p-6'>
      {/* Title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl font-bold text-center mb-6'
      >
        Our Services
      </motion.h2>

      {/* Services grid with animation */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }} // Allow animation to replay on scroll
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className='bg-white p-4 rounded-lg shadow-md text-center border-1 border-blue-900 '
          >
            {/* Icon */}
            <div className="flex justify-center">
              {service.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2'>{service.name}</h3>
            <p className='text-gray-600'>Experience the best car rental service with our {service.name.toLowerCase()}.</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-3xl font-bold text-center mt-12 mb-6'
      >
        Why Choose Us?
      </motion.h2>

      {/* Reasons grid with animation */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }} // Allow animation to replay on scroll
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className='bg-blue-900 p-4 rounded-lg shadow-md text-center border-1 border-black'
          >
            {/* Icon */}
            <div className="flex justify-center">
              {reason.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2 text-white'>{reason.title}</h3>
            <p className='text-white'>{reason.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;