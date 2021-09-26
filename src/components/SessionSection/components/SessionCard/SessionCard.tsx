import React from 'react';
import { container, imageWrap, textWrap } from './SessionCard.module.scss';
import cardImage from '~/images/sessions/card.png';

interface SessionCardProps {}

const SessionCard: React.FC<SessionCardProps> = () => {
  return (
    <div className={container}>
      <div className={imageWrap}>
        <img src={cardImage} alt="Session"/>
      </div>
      <div className={textWrap}>
        <span>안희종 / flex team</span>
        <strong>오늘, UI 프로그래밍을 위한 언어를 만든다면</strong>
      </div>
    </div>
  );
}

export default SessionCard;
