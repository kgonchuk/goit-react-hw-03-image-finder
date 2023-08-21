import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onModalClick }) => {
  const uniqueImages = images.filter((image, index, self) => {
    return index === self.findIndex(img => img.id === image.id);
  });
  return (
    <ul className={css.gallery}>
      {uniqueImages.map(image => (
        <ImageGalleryItem
          key={image.id}
          item={image}
          onModalClick={onModalClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.prototype = {
  onModalClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default ImageGallery;
