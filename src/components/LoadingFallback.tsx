import React from 'react';

const LoadingFallback: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <h5 className="mt-3">Please wait...</h5>
    </div>
  );
};

export default LoadingFallback;
