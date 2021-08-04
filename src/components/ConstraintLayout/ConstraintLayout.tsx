import React from 'react';
import { container } from './ConstraintLayout.module.scss';

interface ConstraintLayoutProps {}

const ConstraintLayout: React.FC<ConstraintLayoutProps> = ({ children }) => {
  return (
    <div className={container}>
      { children }
    </div>
  );
}

export default ConstraintLayout;
