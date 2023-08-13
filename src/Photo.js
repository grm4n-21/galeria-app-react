import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Photo = ({ photo, onDelete, onEdit }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  
  return (
    <Box
    className="img-container relative"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    marginBottom={2}
  >
    <Card>
      <CardMedia
        component="img"
        src={photo.image}
        alt={photo.title}
        height="200"
        style={{ objectFit: 'cover' }}
       
      />
      {hovered && (
        <Box className="edit-delete-buttons absolute top-2 right-2">
          <Button
          
            variant="contained"
            color="primary"
            size="small"
            onClick={() => onEdit(photo)}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onDelete(photo.id)}
          >
            X
          </Button>
        </Box>
      )}
      {hovered && (
        <CardContent className="photo-details absolute bottom-0 left-0 p-2 bg-white bg-opacity-75">
          <Typography variant="subtitle1" fontWeight="bold">
            {photo.title}
          </Typography>
          <Typography variant="body2">{photo.description}</Typography>
        </CardContent>
      )}
    </Card>
  </Box>
);
}

export default Photo;
