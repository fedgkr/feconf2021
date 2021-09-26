import React, { useState } from 'react';
import { container, title, toggleWrap, sessionCardContainer, sessionRow } from './SessionSection.module.scss';
import Toggle from "~/components/SessionSection/components/Toggle/Toggle";
import SessionCard from "~/components/SessionSection/components/SessionCard/SessionCard";

interface SessionSectionProps {}

const SessionSection: React.FC<SessionSectionProps> = () => {
  const [selectedSessionType, setSession] = useState<SessionType>('A');
  return (
    <section className={container}>
      <h2 className={title}>세션 소개</h2>
      <div className={toggleWrap}>
        <Toggle session={selectedSessionType} onSessionChange={setSession}/>
      </div>
      <div className={sessionCardContainer}>
        <div className={sessionRow}>
          <SessionCard/>
          <SessionCard/>
          <SessionCard/>
        </div>
        <div className={sessionRow}>
          <SessionCard/>
          <SessionCard/>
          <SessionCard/>
        </div>
      </div>
    </section>
  );
}

export default SessionSection;
