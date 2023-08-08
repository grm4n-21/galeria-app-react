// PhotoGallery.js
import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({ photos, onDelete, onEdit }) => {
  return (
    <div className="gallery grid grid-cols-1 md:grid-cols-2 gap-6">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          photo={photo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
