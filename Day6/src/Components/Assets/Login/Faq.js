import React, { useState } from 'react';
import './Faq.css';
import Sidebar from './Sidebar';

export default function Faq() {
    const [expandedFAQs, setExpandedFAQs] = useState([]);

  
  const faqs = [
    {
      question: 'How do I check the weather for my current location?',
      answer: 'The app uses your device location services to automatically display the weather for your current location when you open it.',
    },
    {
      question: 'Can I manually search for weather information in other locations?',
      answer: 'Yes, you can enter the name of a city or location in the search bar to get weather forecasts for that specific area.',
    },
    {
        question: 'What weather information does the app provide?',
        answer: 'The app provides information on temperature, humidity, wind speed, precipitation, UV index, and more. You can also view hourly and daily forecasts.',
    },
    {
        question: 'Is the app free to use, or are there in-app purchases?',
        answer: 'The app is free to download and use. However, there may be optional in-app purchases for premium features or an ad-free experience.',
    },
    {
        question: 'How can I report inaccuracies or issues with the app?',
        answer: 'If you encounter any inaccuracies or have feedback, please use the "Contact Us" feature in the app settings. We appreciate user input to improve our services.',
    },
    {
        question: 'Can I save my favorite locations for quick access to their weather information?',
        answer: 'Yes, you can save and organize your favorite locations in the app for easy access to their weather forecasts.',
    },
    {
        question: 'Is the app available for both Android and iOS devices?',
        answer: 'Yes, the app is compatible with both Android and iOS devices. You can download it from the Google Play Store or Apple App Store.',
    },
    
  ];


  const toggleFAQ = (index) => {
    if (expandedFAQs.includes(index)) {
      setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
    } else {
      setExpandedFAQs([...expandedFAQs, index]);
    }
  };
  return (
    <div>
    <Sidebar/>
    <div className='ran'>
    <div className='rectangle88'>
    <div className='kab'>
    <img src="https://media.istockphoto.com/id/1446706809/photo/we-want-your-feedback-written-rectangular-shaped-white-chat-bubble-sitting-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=xtkZWjXRIxKVH7P4lgXtSRH7quihSD854Bo_RF9TlRg=" height="300px" width="500px"/>
    </div>
    
    <div className="faq-container">
   
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${expandedFAQs.includes(index) ? 'expanded' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {expandedFAQs.includes(index) && <div className="faq-answer">{faq.answer}</div>}
          </div>
        
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
