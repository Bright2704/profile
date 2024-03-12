import React, { useState } from 'react';
import './styles.css'; // Import your styles here

function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Click to Open Video</button>
      {isOpen && (
        <div className="modalBackground">
          <div className="videoContainer">
            <iframe
              style={{ width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/ntb5bi5CURU"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoModal;
