import React from 'react';
import Photo from './Photo';
import { Grid } from '@mui/material';



const PhotoGallery = ({ photos, onDelete, onEdit }) => {
  return (
    <Grid container spacing={2} className="gallery">
      {photos.map((photo) => (
        <Grid item xs={12} md={9} lg={6} key={photo.id}>
          <Photo photo={photo} onDelete={onDelete} onEdit={onEdit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoGallery;
