import React from 'react';
import './Navbar.scss';

export default function Navbar(props) {
  return (
    <>
      <div className='nav'>
        <div className='nav__brand'>{props.brand}</div>
        <input className='nav__check' id='nav__check' type='checkbox' />
        <label htmlFor='nav__check'>
          <i className='fas fa-bars nav__label'></i>
        </label>
        <div className='nav__links'>
          <div className='nav__links__arrow'></div>
          <div className='nav__links__item'>LINK</div>
          <div className='nav__links__item'>LINK</div>
          <div className='nav__links__item'>LINK</div>
        </div>
      </div>
    </>
  );
}
