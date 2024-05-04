import React from 'react';
import './Loading.css'; // Import your CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      <svg className="loading-spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="loading-circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
};

export default Loading;