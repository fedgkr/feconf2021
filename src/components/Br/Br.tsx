import React from 'react';

interface BrProps {
  desktop?: boolean;
  mobile?: boolean;
}

const Br: React.FC<BrProps> = ({ desktop, mobile }) => {
  if (desktop) {
    return <br className="desktop"/>
  }
  if (mobile) {
    return <br className="mobile"/>
  }
  return null;
}

export default Br;
