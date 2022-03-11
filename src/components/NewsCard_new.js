import React from 'react';
import './NewsCard.scss';
import image from './download.jpeg';

export default function NewsCard_new() {
  const im = {
    backgroundImage: image,
  };
  return (
    <>
      <div className='card'>
        <div className='card__img' style={im}></div>
        <div className='card__title'>{}</div>
        <div className='card__desc'>{} ...</div>
      </div>
    </>
  );
}
