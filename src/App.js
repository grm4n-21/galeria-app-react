import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import AddPhotoForm from './AddPhotoForm';
import EditPhotoForm from './EditPhotoForm';
import { Container, Typography, Grid, Box } from '@mui/material';

function App() {
  const [photos, setPhotos] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editPhoto, setEditPhoto] = useState({ id: '', title: '', description: '' });

  const addPhoto = (title, description, image) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const photoId = `photo${Date.now()}`;
      const newPhoto = {
        id: photoId,
        title: title,
        description: description,
        image: e.target.result,
      };

      
      setPhotos([...photos, newPhoto]);
    };

    reader.readAsDataURL(image);
  };

  const deletePhoto = (photoId) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(updatedPhotos);
  };

  const showEditForm = (photo) => {
    setEditPhoto(photo);
    setEditModalVisible(true);
  };

  const hideEditForm = () => {
    setEditModalVisible(false);
  };

  const saveEdit = (editedPhoto) => {
    console.log(editPhoto)
    const updatedPhotos = photos.map((photo) =>
      photo.id === editedPhoto.id ? editedPhoto : photo
    );
    setPhotos(updatedPhotos);
    setEditModalVisible(false);
  };

  return (
    <Container>
      <Box bgcolor="white" minHeight="100vh">
        <Box bgcolor="blue" color="white" p={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold" mb={2} >
            Galería de Fotos
          </Typography>
          <Typography variant="h6" mb={2}>
            Bienvenido a nuestra galería de fotos
          </Typography>
        </Box>

        <Grid container spacing={6} p={6}>
          <Grid item xs={12} md={8}>
            <Box bgcolor="gray.100" p={4} borderRadius="lg" boxShadow="md">
              <PhotoGallery photos={photos} onDelete={deletePhoto} onEdit={showEditForm} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="gray.100" p={4} borderRadius="lg" boxShadow="md">
              <AddPhotoForm onAddPhoto={addPhoto} />
            </Box>
          </Grid>
        </Grid>

        {editModalVisible && (
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(0, 0, 0, 0.5)"
          >
            <EditPhotoForm photo={editPhoto} onSaveEdit={saveEdit} onClose={hideEditForm} />
          </Box>
        )}

        <Box mt={6} bgcolor="gray.200" p={2} textAlign="center">
          <Typography>
            Todos los derechos reservados &copy; 2023 Galería de Fotos
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
 

export default App;
