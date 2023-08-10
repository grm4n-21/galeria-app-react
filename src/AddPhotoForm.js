import React, { useState } from 'react';
import { Typography, TextField, Button, TextareaAutosize } from '@mui/material';

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
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Agregar Nueva Foto
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="title">Título:</label>
          <TextField
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            variant="outlined"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description">Descripción:</label>
          <TextareaAutosize
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rowsMin={3}
            fullWidth
            placeholder="Escribe una descripción..."
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Agregar Foto
        </Button>
      </form>
    </div>
  );
}

export default AddPhotoForm;
