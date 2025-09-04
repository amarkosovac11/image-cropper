import React, { useState } from 'react';
import './App.css';
import FileUploader from './components/FileUploader';
import ImageCropper from './components/ImageCropper';


const App = () => {

  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");


  const onImageSelected = (selectedImage) => {
    setImage(selectedImage);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    const imageObj1 = new Image();
    imageObj1.src = image;

    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );


      const dataUrl = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataUrl);
      setCurrentPage("img-cropped");
    };
  };


  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };




    
  
  return (
    <div className="container">
      {currentPage === "choose-img" ? (
        <FileUploader onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (

        <div>
          <div>
            <img src={imgAfterCrop} alt="cropped" className='img-after-crop'/>
          </div>

        <div className="btns-after-crop">

          <button
            onClick={() => {
              setCurrentPage("crop-img");
            }}
            className="btn"
          > Cancel </button>


          <button
            onClick={() => {
              setCurrentPage("choose-img");
              setImage("");
            }}
            className="btn"
          > Choose New Image </button>

          <button
          onClick ={() => {
            const link = document.createElement('a');
            link.href = imgAfterCrop;
            link.download = 'cropped-image.jpg';
            link.click();
          }}> Download </button>


            </div>
        </div>  
      )}
    </div>
  );
};

export default App;