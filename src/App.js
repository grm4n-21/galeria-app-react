import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import AddPhotoForm from './AddPhotoForm';
import EditPhotoForm from './EditPhotoForm';

function App() {
  const [photos, setPhotos] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editPhoto, setEditPhoto] = useState({ id: '', title: '', description: '' });

  // Agregar nueva foto a la galería
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

  // Eliminar foto de la galería
  const deletePhoto = (photoId) => {
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  // Mostrar formulario de edición
  const showEditForm = (photoId, title, description) => {
    setEditPhoto({ id: photoId, title: title, description: description });
    setEditModalVisible(true);
  };

  // Ocultar formulario de edición
  const hideEditForm = () => {
    setEditModalVisible(false);
  };

  // Guardar cambios después de editar
  const saveEdit = (editedPhoto) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === editedPhoto.id ? editedPhoto : photo
      )
    );

    hideEditForm();
  };

  return (
    <div className="container mx-auto p-6">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Galería de Fotos</h1>
        <h3 className="text-xl">Bienvenido a nuestra galería de fotos</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddPhotoForm onAddPhoto={addPhoto} />
        <PhotoGallery
          photos={photos}
          onDeletePhoto={deletePhoto}
          onEditPhoto={showEditForm}
        />
      </div>

      {editModalVisible && (
        <EditPhotoForm
          photo={editPhoto}
          onSaveEdit={saveEdit}
          onCancelEdit={hideEditForm}
        />
      )}

      <footer className="mt-6 bg-gray-200 p-2 text-center">
        <p>Todos los derechos reservados &copy; 2023 Galería de Fotos</p>
      </footer>
    </div>
  );
}

export default App;
