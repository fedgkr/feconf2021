import React from 'react';
import { container, active } from './Toggle.module.scss';

interface ToggleProps {
  session: SessionType;
  onSessionChange: (session: SessionType) => void;
}

const Toggle: React.FC<ToggleProps> = ({ session, onSessionChange }) => {
  return (
    <div className={container}>
      <button className={session === 'A' ? active : ''} onClick={() => onSessionChange('A')}>A track</button>
      <button className={session === 'B' ? active : ''} onClick={() => onSessionChange('B')}>B track</button>
    </div>
  );
}

export default Toggle;
