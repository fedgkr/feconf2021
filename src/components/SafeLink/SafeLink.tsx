import React, { MouseEventHandler } from 'react';

interface SafeLinkProps {
  href: string;
  onClick?: MouseEventHandler;
}

const SafeLink: React.FC<SafeLinkProps> = ({ href, onClick, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} onClick={onClick}>
      { children }
    </a>
  );
}

export default SafeLink;
