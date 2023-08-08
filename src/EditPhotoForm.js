import React, { useState } from 'react';

const EditPhotoForm = ({ photo, onSaveEdit, onClose }) => {
  const [title, setTitle] = useState(photo.title);
  const [description, setDescription] = useState(photo.description);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedPhoto = { ...photo, title, description };
    onSaveEdit(editedPhoto);
    onClose();
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded shadow-lg">
        <span
          className="close cursor-pointer absolute top-2 right-2"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-2">Editar Foto</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={photo.id} />
          <div className="mb-2">
            <label htmlFor="edit-title">Título:</label>
            <input
              type="text"
              id="edit-title"
              value={title}
              onChange={handleTitleChange}
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="edit-description">Descripción:</label>
            <textarea
              id="edit-description"
              value={description}
              onChange={handleDescriptionChange}
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPhotoForm;
