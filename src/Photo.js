import React, { useState } from 'react';

const Photo = ({ photo, onDelete, onEdit }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="img-container relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={photo.image}
        alt={photo.title}
        className="w-full h-64 object-cover rounded"
      />
      {hovered && (
        <div className="edit-delete-buttons absolute top-2 right-2">
          <button
            className="edit-button bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => onEdit(photo)}
          >
            Editar
          </button>
          <button
            className="delete-button bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => onDelete(photo.id)}
          >
            X
          </button>
        </div>
      )}
      {hovered && (
        <div className="photo-details absolute bottom-0 left-0 p-4 bg-white bg-opacity-75 w-full">
          <h3 className="font-bold text-lg mb-2">{photo.title}</h3>
          <p className="text-sm">{photo.description}</p>
        </div>
      )}
    </div>
  );
};

export default Photo;
