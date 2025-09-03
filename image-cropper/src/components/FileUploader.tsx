import React, { ChangeEvent, useRef } from 'react';

interface FileUploaderProps {
  onImageSelected: (image: string | ArrayBuffer | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImage = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger file input click */}
      <button className="btn" onClick={onChooseImage}>
        Choose Image
      </button>
    </div>
  );
};

export default FileUploader;