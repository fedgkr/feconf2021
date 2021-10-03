import React from 'react';
import { container, imageWrap, textWrap } from './SessionCard.module.scss';
import cardImage from '~/images/sessions/card.png';
import { useSessionDetail } from "~/data/states/modal.state";

interface SessionCardProps {
  session: Session;
}

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
      </div>
    </div>
  );
}

export default SessionCard;
