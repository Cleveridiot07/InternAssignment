// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};

const loaderStyle = {
  border: '8px solid rgba(255, 255, 255, 0.3)',
  borderLeftColor: '#4fa94d', // Change this to your desired color
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite',
};

const styles = `
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Loader;
