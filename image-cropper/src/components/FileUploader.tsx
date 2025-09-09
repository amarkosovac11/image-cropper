import React, { ChangeEvent, useRef } from "react";

interface FileUploaderProps {
  onImageSelected: (image: File) => void; 
}

const FileUploader: React.FC<FileUploaderProps> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onImageSelected(file); 
    }
  };

  const onChooseImage = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <h1>IMAGE CROPPER</h1>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
      <button className="btn1" onClick={onChooseImage}>
        Choose Image
      </button>
    </div>
  );
};

export default FileUploader;
