import React from 'react';
import './header.css';
import logo from './assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <nav>
        <div className='nav'>
          <div className='nav__logo'>
            <a href='/'>
              <img src={logo} alt='logo' width='50px' />
            </a>
          </div>

          <div className='nav__links'>
            <a href='/about' className='nav__link'>
              About
            </a>
            <a href='/faq' className='nav__link'>
              FAQs
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
