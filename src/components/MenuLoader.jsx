import React, { useState, useEffect } from 'react';
 // Make sure to import the CSS file

const MenuLoader = () => {
  // State to track the loading status
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  // After 3 seconds, set loading to false
    }, 3000);  // Simulate 3 seconds of loading time
  }, []);

  return (
    <div>
      {isLoading ? (
        // Loader UI if loading
        <div id="loader" className="loader-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        // Content after loading
        <div id="content">
          <h1>Your Content is Here!</h1>
          <p>This content will appear once the data is loaded.</p>
        </div>
      )}
    </div>
  );
}

export default MenuLoader;
