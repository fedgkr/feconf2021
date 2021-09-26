import React from 'react';
import { container, indicator } from './Toggle.module.scss';

interface ToggleProps {
  session: SessionType;
  onSessionChange: (session: SessionType) => void;
}

const Toggle: React.FC<ToggleProps> = ({ session, onSessionChange }) => {
  return (
    <div className={container}>
      <button onClick={() => onSessionChange('A')}>A track</button>
      <button onClick={() => onSessionChange('B')}>B track</button>
      <div className={indicator} style={{ transform: `translateX(${ session === 'A' ? 0 : 100 }%)` }}><div/></div>
    </div>
  );
}

export default Toggle;
