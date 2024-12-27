import React from 'react';
import defaultImage from '/images/placeholder.jpg';

interface Props {
  customClass?: string;
  src: string;
  alt: string;
}

export const Image: React.FC<Props> = ({ alt, customClass = '', src }) => {
  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImage;
  };

  return (
    <div>
      <img
        className={`defaultClass ${customClass}`}
        src={src}
        alt={alt}
        onError={handleOnError}
        loading="lazy"
      />
    </div>
  );
};
