//import React from 'react';
import { useNavigate } from 'react-router-dom';
import JavaImage from '../assets/java_img.png';
import CplusImage from '../assets/c++_img.png';
import PythonImage from '../assets/py_img.png';
import CImage from '../assets/c_img.png';
import '../styles/Modal.css';

const Modal = ({ showModal, onClose }) => {
  const navigate = useNavigate();

  const handleButtonClick = (imageName) => {
    // Add your logic here for each button click
    console.log(`Button ${imageName} clicked`);

    // Redirect to the corresponding page
    if (imageName === 'C') {
      navigate('/c'); 
    }
    else if (imageName === 'Python') {
      navigate('/python'); 
    }
    else if (imageName === 'Java') {
      navigate('/java'); 
    }
    else if (imageName === 'Cplus') {
      navigate('/cplus'); 
    }
    
  };

  return (
    <>
      <div className={`modal ${showModal ? 'active' : ''}`}>
        <div className="modal-header">
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="button-container">
          <img
              src={PythonImage}
              alt="Python"
              className="image-button"
              onClick={() => handleButtonClick('Python')}
            />
            <img
              src={CImage}
              alt="C"
              className="image-button"
              onClick={() => handleButtonClick('C')}
            />
            <img
              src={JavaImage}
              alt="Java"
              className="image-button"
              onClick={() => handleButtonClick('Java')}
            />
            <img
              src={CplusImage}
              alt="Cplus"
              className="image-button"
              onClick={() => handleButtonClick('Cplus')}
            />
          </div>
        </div>
      </div>
      <div id="overlay" className={showModal ? 'active' : ''}></div>
    </>
  );
};

export default Modal;