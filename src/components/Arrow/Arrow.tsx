import React from 'react';

interface ArrowProps {}

const Arrow: React.FC<ArrowProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#B4C1DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Arrow;
