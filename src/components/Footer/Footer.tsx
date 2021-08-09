import React from 'react';
import { container } from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={container}></div>
  );
}

export default Footer;
