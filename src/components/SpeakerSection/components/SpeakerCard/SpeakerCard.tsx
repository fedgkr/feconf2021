import React from 'react';
import { container, textWrap, image } from './SpeakerCard.module.scss';
import sanggeun from '~/images/speakers/sanggeun.png';

console.log('sanggeun :', sanggeun);

interface SpeakerCardProps {}

const SpeakerCard: React.FC<SpeakerCardProps> = () => {
  return (
    <div className={container}>
      <div className={textWrap}>
        <span>뷰노</span>
        <h3>김상근</h3>
      </div>
      <img className={image} src={sanggeun} alt=""/>
    </div>
  );
}

export default SpeakerCard;
