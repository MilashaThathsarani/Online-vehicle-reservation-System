import React from 'react';

function FAQ() {
  const faqs = [
    { question: 'What types of vehicles are available?', answer: 'We offer luxury, budget, and economy vehicles for rent.tgbddgnfhnfgnfgggggggggggggg' },
    { question: 'How do I rent a vehicle?', answer: 'You can book a vehicle through our website by selecting your preferred car and rental dates.' },
    { question: 'Are there any additional charges?', answer: 'Additional charges may apply for insurance, fuel, and late returns.rwgsrgergerg' },
    { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel your booking up to 24 hours before the pickup time without a cancellation fee.' },
    { question: 'What is the minimum rental age?', answer: 'The minimum rental age is 21 years old. dfgdfgfgdfg ghehdfhfhghghfghfhfghfhg' },
    { question: 'Do you offer long-term rentals?', answer: 'Yes, we offer discounts for long-term rentals. Contact us for more details.' },
    { question: 'Is insurance included?', answer: 'Basic insurance is included, but you can opt for additional coverage.hsvfkvghfvbjhdfgdbvgdfvdfvg' },
    { question: 'Can I modify my booking?', answer: 'Yes, you can modify your booking up to 24 hours before the pickup time.' },
    { question: 'What payment methods do you accept?', answer: 'We accept credit cards, debit cards, and online payment methods.dhsbchdvvhgdsvcjhsdhj' },
    { question: 'Do you provide roadside assistance?', answer: 'Yes, we provide 24/7 roadside assistance for all rentals.dsfsdfsddddddddddddddddd' }
  ];

  return (
    <div className='min-h-screen bg-white py-10 px-6'>
      <h2 className='text-2xl font-bold text-center mb-6'>Frequently Asked Questions</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column - First 5 FAQs */}
        <div className='space-y-4 mr-5'>
          {faqs.slice(0, 5).map((faq, index) => (
            <div key={index} className='p-4 bg-white shadow-md rounded-lg'>
              <h3 className='text-lg font-semibold'>{faq.question}</h3>
              <p className='text-gray-700 mt-2'>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Right Column - Next 5 FAQs */}
        <div className='space-y-4 ml-5'>
          {faqs.slice(5).map((faq, index) => (
            <div key={index} className='p-4 bg-white shadow-md rounded-lg'>
              <h3 className='text-lg font-semibold'>{faq.question}</h3>
              <p className='text-gray-700 mt-2'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;