import React, { useState } from 'react';
import './Navbar.scss';
import NavItem from './NavItem';

export default function Navbar(props) {
  const [btnCSS, setBtnCSS] = useState('fa-bars');
  const toggleDropdown = () => {
    if (btnCSS === 'fa-bars') {
      setBtnCSS('fa-times');
    } else {
      setBtnCSS('fa-bars');
    }
  };
  return (
    <>
      <div className='nav'>
        <div className='nav__brand'>{props.brand}</div>
        <input className='nav__check' id='nav__check' type='checkbox' />
        <label htmlFor='nav__check'>
          <i className={`fas ${btnCSS} nav__label`} onClick={toggleDropdown} />
        </label>
        <div className='nav__links'>
          <div className='nav__links__arrow'></div>
          <NavItem a='business' />
          <NavItem a='entertainment' />
          <NavItem a='general' />
          <NavItem a='health' />
          <NavItem a='science' />
          <NavItem a='sports' />
          <NavItem a='technology' />
        </div>
      </div>
    </>
  );
}
