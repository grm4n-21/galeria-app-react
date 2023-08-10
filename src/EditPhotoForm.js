import React, { useState } from 'react';
import { Modal, Typography, TextField, Button, TextareaAutosize, Box } from '@mui/material';

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
    <Modal open={true} onClose={onClose}>
    <Box className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Box className="modal-content bg-white p-6 rounded shadow-lg">
        <span className="close cursor-pointer absolute top-2 right-2" onClick={onClose}>
          &times;
        </span>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Editar Foto
        </Typography>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={photo.id} />
          <div className="mb-2">
            <label htmlFor="edit-title">Título:</label>
            <TextField
              type="text"
              id="edit-title"
              value={title}
              onChange={handleTitleChange}
              fullWidth
              variant="outlined"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="edit-description">Descripción:</label>
            <TextareaAutosize
              id="edit-description"
              value={description}
              onChange={handleDescriptionChange}
              rowsMin={3}
              fullWidth
              variant="outlined"
              placeholder="Escribe una descripción..."
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </Box>
    </Box>
  </Modal>
);
}

export default EditPhotoForm;
