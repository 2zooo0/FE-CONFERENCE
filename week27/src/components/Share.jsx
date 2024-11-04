import React, { useState } from 'react';
import './Share.css';

export const Share = () => {
  const [shared, setShared] = useState(false);

  const handleClick = () => {
    setShared(!shared);
  };

  return (
    <button
      className={`share-button ${shared ? 'shared' : ''}`}
      onClick={handleClick}
    >
      {shared ? 'Shared' : 'Share'}
    </button>
  );
};
