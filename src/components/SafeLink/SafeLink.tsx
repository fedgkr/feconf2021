import React from 'react';

interface SafeLinkProps {
  href: string;
}

const SafeLink: React.FC<SafeLinkProps> = ({ href, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      { children }
    </a>
  );
}

export default SafeLink;
