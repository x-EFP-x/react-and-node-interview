import React from 'react';
import './articles.css';

function Articles(props) {
  const handleClick = () => {
    window.open(props.url, '_blank');
  };

  return (
    <li onClick={handleClick} className='article-item'>
      <div className='image'>
        <img src={`${props.urlToImage}`} alt="img" />
      </div>
      <div className='content'>
        <p className='title'>{props.title}</p>
        <p className='author'>{props.author}</p>
        <p className='description'>{props.description}</p>
      </div>
    </li>
  );
}

export { Articles };
