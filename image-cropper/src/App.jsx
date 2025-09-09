import React, { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";
import ImageCropper from "./components/ImageCropper";

const App = () => {
  const [image, setImage] = useState(null); 
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [previewUrl, setPreviewUrl] = useState(""); 
  const [finalUrl, setFinalUrl] = useState(""); 
  const [lastCropArea, setLastCropArea] = useState(null); 

  
  const onImageSelected = (selectedImage) => {
    setImage(selectedImage); 
    setCurrentPage("crop-img");
  };

  
  const sendToBackend = async (imgCroppedArea, endpoint) => {
    const formData = new FormData();
    formData.append("image", image); 
    formData.append("x", imgCroppedArea.x);
    formData.append("y", imgCroppedArea.y);
    formData.append("width", imgCroppedArea.width);
    formData.append("height", imgCroppedArea.height);

    const response = await fetch(`http://localhost:5000/api/image/${endpoint}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Backend error: " + response.statusText);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };


  const onCropDone = async (imgCroppedArea) => {
    try {
      setLastCropArea(imgCroppedArea); 
      const preview = await sendToBackend(imgCroppedArea, "preview");
      setPreviewUrl(preview);
      setFinalUrl(""); 
      setCurrentPage("img-cropped");
    } catch (err) {
      console.error(err);
      alert("Error while previewing image");
    }
  };

  
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage(null);
    setPreviewUrl("");
    setFinalUrl("");
    setLastCropArea(null);
  };

  return (
    <div className="container">
      {currentPage === "choose-img" ? (
        <FileUploader onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={URL.createObjectURL(image)} 
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <div>
            {previewUrl && (
              <>
                <h3>Preview (scaled down so it can be blurry)</h3>
                <img src={previewUrl} alt="preview" className="img-after-crop" />
              </>
            )}
            {finalUrl && (
              <>
                <h3>Final Generated Image</h3>
                <img src={finalUrl} alt="final" className="img-after-crop" />
              </>
            )}
          </div>

          <div className="btns-after-crop">
            <button
              onClick={() => setCurrentPage("crop-img")}
              className="btnCancel2"
            >
              Back to Crop
            </button>

            <button
              onClick={() => {
                setCurrentPage("choose-img");
                setImage(null);
                setPreviewUrl("");
                setFinalUrl("");
                setLastCropArea(null);
              }}
              className="btnCNI"
            >
              Choose New Image
            </button>

           
            {previewUrl && !finalUrl && (
              <button
                className="btnGenerate"
                onClick={async () => {
                  try {
                    const final = await sendToBackend(lastCropArea, "generate");
                    setFinalUrl(final);
                  } catch (err) {
                    console.error(err);
                    alert("Error while generating final image");
                  }
                }}
              >
                Generate Final
              </button>
            )}

            
            {finalUrl && (
              <button
                className="btnDownload"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = finalUrl;
                  link.download = "final-cropped-image.png";
                  link.click();
                }}
              >
                Download Final
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
