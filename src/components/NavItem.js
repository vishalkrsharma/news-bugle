import React from 'react';
import './NavItem.scss';
export default function NavItem(props) {
  return (
    <>
      <a href='/' className='nav__links__item'>
        {props.a.toUpperCase()}
      </a>
    </>
  );
}
