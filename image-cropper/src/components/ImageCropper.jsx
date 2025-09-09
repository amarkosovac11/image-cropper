import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(parseFloat(event.target.value)); 
  };

  return (
    <div className="cropper-container">
      <div className="cropper">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspectRatio}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              top: "20%",
              width: "500px",
              height: "400px",
              border: "2px solid purple",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
            },
          }}
        />
      </div>

      <div className="action-btns">
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
          <label>
            <input type="radio" value={1 / 1} name="ratio" /> 1:1
          </label>
          <label>
            <input type="radio" value={5 / 4} name="ratio" /> 5:4
          </label>
          <label>
            <input type="radio" value={4 / 3} name="ratio" defaultChecked /> 4:3
          </label>
          <label>
            <input type="radio" value={3 / 2} name="ratio" /> 3:2
          </label>
          <label>
            <input type="radio" value={5 / 3} name="ratio" /> 5:3
          </label>
          <label>
            <input type="radio" value={16 / 9} name="ratio" /> 16:9
          </label>
          <label>
            <input type="radio" value={3 / 1} name="ratio" /> 3:1
          </label>
        </div>

        <div className="btn-container">
          <button className="btnCancel" onClick={onCropCancel}>
            Cancel
          </button>

          <button
            className="btnDone"
            onClick={() => {
              if (croppedArea) {
                onCropDone(croppedArea); 
              } else {
                alert("Please crop an area first");
              }
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
