import React from 'react';
import faqs from './faqArray';
import FAQholder from '../../components/FAQholder';
import './faq.css'

export default function FAQs() {
  return (
    <div>

      <p className="title">
        FAQs
      </p>
      {faqs.map((item) => (
        <FAQholder
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
