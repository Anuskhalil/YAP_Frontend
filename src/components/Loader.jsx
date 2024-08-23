// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <video autoPlay loop muted>
        <source src="./src/videos/Loader video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
