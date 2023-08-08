import React, { useState } from 'react';

const AddPhotoForm = ({ onAddPhoto }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      onAddPhoto(title, description, image);
      setTitle('');
      setDescription('');
      setImage(null);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Agregar Nueva Foto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="block w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Agregar Foto
        </button>
      </form>
    </div>
  );
};

export default AddPhotoForm;
