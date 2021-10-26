import React from 'react';
import { container } from './TimeTag.module.scss';

interface TimeTagProps {
  time: string;
}

const TimeTag: React.FC<TimeTagProps> = ({ time }) => {
  return (
    <div className={container}>{ time }</div>
  );
}

export default TimeTag;
