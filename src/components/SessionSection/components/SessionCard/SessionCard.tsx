import React from 'react';
import { container, imageWrap, textWrap, time } from './SessionCard.module.scss';
import cardImage from '~/images/sessions/card.png';
import { useSessionDetail } from "~/data/states/modal.state";

interface SessionCardProps {
  session: Session;
}

const timeTable = [
  '11:00 ~ 11:40',
  '11:50 ~ 12:30',
  '13:30 ~ 14:10',
  '14:20 ~ 15:00',
  '15:10 ~ 15:50',
  '16:00 ~ 16:40',
];

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const [, setDetail] = useSessionDetail();
  return (
    <div className={container} onClick={() => setDetail({ active: true, data: session })}>
      <div className={imageWrap}>
        <img src={cardImage} alt="Session"/>
      </div>
      <div className={textWrap}>
        <span>{session.speaker.name} / {session.speaker.company}</span>
        <strong>{session.title}</strong>
        <div className={time}>{timeTable[session.index]}</div>
      </div>
    </div>
  );
}

export default SessionCard;
