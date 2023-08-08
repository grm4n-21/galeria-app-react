import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import AddPhotoForm from './AddPhotoForm';
import EditPhotoForm from './EditPhotoForm';

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

  const showEditForm = (photoId, title, description) => {
    setEditPhoto({ id: photoId, title: title, description: description });
    setEditModalVisible(true);
  };

  const hideEditForm = () => {
    setEditModalVisible(false);
  };

  const saveEdit = (editedPhoto) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === editedPhoto.id ? editedPhoto : photo
    );
    setPhotos(updatedPhotos);
    setEditModalVisible(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Galería de Fotos</h1>
        <h3 className="text-xl">Bienvenido a nuestra galería de fotos</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg shadow-md">
          <PhotoGallery photos={photos} onDelete={deletePhoto} onEdit={showEditForm} />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <AddPhotoForm onAddPhoto={addPhoto} />
        </div>
      </div>

      {editModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <EditPhotoForm
            photo={editPhoto}
            onSaveEdit={saveEdit}
            onClose={hideEditForm}
          />
        </div>
      )}

      <footer className="mt-6 bg-gray-200 p-2 text-center">
        <p>Todos los derechos reservados &copy; 2023 Galería de Fotos</p>
      </footer>
    </div>
  );
}

export default App;
