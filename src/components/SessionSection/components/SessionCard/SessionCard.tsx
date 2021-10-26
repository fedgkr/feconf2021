import React from 'react';
import { container, imageWrap, textWrap, time } from './SessionCard.module.scss';
import cardImage from '~/images/sessions/card.png';
import { useSessionDetail } from "~/data/states/modal.state";
import TimeTag from "~/components/TimeTag/TimeTag";

interface SessionCardProps {
  session: Session;
}

const timeTable = [
  '11:15 ~ 12:00',
  '12:15 ~ 13:00',
  '14:00 ~ 14:45',
  '14:45 ~ 15:30',
  '15:45 ~ 16:30',
  '16:30 ~ 17:15',
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
        <TimeTag time={timeTable[session.index]}/>
      </div>
    </div>
  );
}

export default SessionCard;
