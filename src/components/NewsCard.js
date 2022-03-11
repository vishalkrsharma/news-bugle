import React, { useState } from 'react';
import './NewsCard.scss';

export default function NewsCard(props) {
  let { source, title, description, url, urlToImage, published, content } = props;
  const [main, setMain] = useState(title);

  const newTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='card'>
      <div className='card__source'>{source.name}</div>
      <img src={urlToImage} className='card__img' alt='Image not found' />
      <div className='card__title'>{title.substring(0, 78)}...</div>
      <div className='card__desc'>{description.substr(0, 99)}...</div>
      <button
        className='card__btn'
        onClick={() => {
          newTab(url);
        }}
      >
        Read Full Article
      </button>
    </div>
  );
}
