import React from 'react';
import './../pages/FAQs/faq.css';
import icon from './../pages/FAQs/assets/drop.svg';

function FAQholder(props) {
  
  return (
    <div className='faq-holder'>
      <button onClick={props.click} className='question'>
        <p>{props.question}</p>

        <img src={icon} width='13px' alt='' />
      </button>

      <div className='answer'>
        <div className='line'></div>
        <p>{props.answer}</p>
      </div>
    </div>
  );
}

export default FAQholder;
