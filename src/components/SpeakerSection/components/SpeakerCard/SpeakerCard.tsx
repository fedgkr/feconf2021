import React from 'react';
import { container, textWrap, image } from './SpeakerCard.module.scss';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className={container}>
      <div className={textWrap}>
        <span>{speaker.company}</span>
        <h3>{speaker.name}</h3>
      </div>
      <img className={image} src="/images/speakers/sanggeun.png" alt=""/>
    </div>
  );
}

export default SpeakerCard;
