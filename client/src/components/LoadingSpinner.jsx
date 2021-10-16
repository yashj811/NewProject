import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div className="spinner-border " role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;