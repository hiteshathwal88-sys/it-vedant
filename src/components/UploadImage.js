import React, { useState } from "react";
import "./UploadImage.css";

function UploadImage() {
  const [image, setImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create preview URL
    }
  };

  return (
    <div className="page upload">
      <h2>📸 Upload Your Children’s Day Picture!</h2>
      <p>Choose your favorite picture to celebrate this special day 🎉</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input"
      />

      {image && (
        <div className="preview">
          <img src={image} alt="Preview" className="uploaded-img" />
        </div>
      )}
    </div>
  );
}

export default UploadImage;
