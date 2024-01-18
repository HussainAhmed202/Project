// AddImagesPopup.js
import React, { useState } from 'react';
import Popup from './Popup';

const langSelectPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="add-images" onClick={openPopup}>
        {/* Plus symbol or any other UI for the clickable plus */}
        <span>+</span>
      </div>
      {isPopupOpen && (
        <Popup onClose={closePopup}>
          {/* Display 4 images here */}
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
          <img src="image4.jpg" alt="Image 4" />
        </Popup>
      )}
    </>
  );
};

export default langSelectPopup;
