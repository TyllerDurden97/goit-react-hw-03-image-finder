import React from 'react';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, OpenCloseModal }) => {
   return (
   <li
      //  className={gallery-item}
      >
      <img onClick={OpenCloseModal} src={webformatURL} alt={tags} />
      </li>
   
   )
}