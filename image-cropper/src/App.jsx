import React, { useState } from 'react'
import './App.css'
import FileUploader from './components/FileUploader'
import Cropper from 'react-easy-crop';
import ImageCropper from './components/ImageCropper';

const App = () => {

  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");

  const onImageSelected = (selectedImage) => {
    setImage(selectedImage);
    setCurrentPage("crop-img");
  }

  const onCropDone = (imageCroppedArea) => {
  }

  const onCropCancel = () => {}
  return (
    <div className="container">
      {currentPage === "choose-img" ? (
      <FileUploader onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
      <ImageCropper image={image} 
      onCropDone = {onCropDone}
      onCropCancel = {onCropCancel}
      />
      )  : ( <div></div>
      )}
    </div>
  )
};

export default App;