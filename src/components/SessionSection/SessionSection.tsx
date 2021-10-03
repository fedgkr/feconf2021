import React, { useRef, useState } from 'react';
import { container, visible, title, toggleWrap, sessionCardContainer, sessionRow } from './SessionSection.module.scss';
import Toggle from "~/components/SessionSection/components/Toggle/Toggle";
import SessionCard from "~/components/SessionSection/components/SessionCard/SessionCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import { sessions } from "~/data/db/sessions";

interface SessionSectionProps {}

const SessionSection: React.FC<SessionSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const [selectedSessionType, setSession] = useState<SessionType>('A');
  const sessionList = sessions.filter((s) => s.type === selectedSessionType);
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="sessions">
      <h2 className={title}>세션 소개</h2>
      <div className={toggleWrap}>
        <Toggle session={selectedSessionType} onSessionChange={setSession}/>
      </div>
      <div className={sessionCardContainer}>
        <div className={sessionRow}>
          {sessionList.slice(0, 3).map((session) => (
            <SessionCard key={session.title} session={session}/>
          ))}
        </div>
        <div className={sessionRow}>
          {sessionList.slice(3, 6).map((session) => (
            <SessionCard key={session.title} session={session}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SessionSection;
