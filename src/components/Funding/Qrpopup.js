// Qrpopup.js

import React from 'react';
import Qrcode from '../../assets/img/cusat.png';

const popupContentStyles = {
  // Add your styles here
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative', // To make sure close button is positioned relative to the content
};

const closeButtonStyles = {
  // Add your styles for the close button here
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  fontSize: '24px',
};

const qrCodeContainerStyles = {
  // Add your styles for the QR code container here
  width: '300px', // Replace with the desired width
  height: '300px', // Ensure the height matches the width to make it a square
  marginTop: '20px',
  overflow: 'hidden', // Ensure the QR code doesn't exceed the container's size
};

const qrCodeStyles = {
  // Add your styles for the QR code image here
  width: '100%',
  height: '100%',
};

function Qrpopup({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup-content" style={popupContentStyles}>
        <span className="close" onClick={onClose} style={closeButtonStyles}>
          &times;
        </span>
        <h2>QR Code</h2>
        <p>UPI id: 8606947001@ybl</p>
        <div className="qr-code-container" style={qrCodeContainerStyles}>
          <img
            src={Qrcode} // Replace 'path_to_your_custom_image.png' with the actual URL or path of your custom QR code image
            alt="QR Code"
            style={qrCodeStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default Qrpopup;
