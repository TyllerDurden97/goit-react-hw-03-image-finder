import React from 'react';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
   return <>
   <li
       className="gallery-item">
      <img src={webformatURL} alt={tags} />
      </li>
   </>
}