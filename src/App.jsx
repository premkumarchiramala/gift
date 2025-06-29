import React, { useState } from 'react';

const SmileVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOpen = () => setShowVideo(true);
  const handleClose = () => setShowVideo(false);

  return (
    <div style={styles.container}>
      <h2>😊 Welcome to ....</h2>

      {!showVideo ? (
        <>
          <p style={styles.message}>Click the button to open a special video for you!</p>
          <button onClick={handleOpen} style={styles.button}>Open  🎁</button>
        </>
      ) : (
        <>
          <video
            style={styles.video}
            controls
            autoPlay
            muted
            loop
          >
            <source src="/src/assets/smile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <br />
          <button onClick={handleClose} style={styles.closeBtn}>Close Video </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '10px',
  },
  message: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    backgroundColor: '#ff6f00',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  closeBtn: {
    marginTop: '15px',
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  video: {
    width: '90%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
};

export default SmileVideo;
