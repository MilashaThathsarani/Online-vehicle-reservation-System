import React from 'react';

function FAQ() {
  const faqs = [
    { question: 'What types of vehicles are available?', answer: 'We offer luxury, budget, and economy vehicles for rent.' },
    { question: 'How do I rent a vehicle?', answer: 'You can book a vehicle through our website by selecting your preferred car and rental dates.' },
    { question: 'Are there any additional charges?', answer: 'Additional charges may apply for insurance, fuel, and late returns.' },
    { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel your booking up to 24 hours before the pickup time without a cancellation fee.' },
    { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel your booking up to 24 hours before the pickup time without a cancellation fee.' },
  ];

  return (
    <div className='min-h-screen bg-white py-10 px-6 ml-5'>
      <h2 className='text-2xl font-bold text-center mb-6'>Frequently Asked Questions</h2>
      <div className='max-w-3xl mx-auto'>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4 p-4 bg-white shadow-md rounded-lg'>
            <h3 className='text-lg font-semibold'>{faq.question}</h3>
            <p className='text-gray-700 mt-2'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
