import React from 'react';
import { container, textWrap, image } from './SpeakerCard.module.scss';
import sanggeun from '~/images/speakers/sanggeun.png';

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
      <img className={image} src={sanggeun} alt=""/>
    </div>
  );
}

export default SpeakerCard;
