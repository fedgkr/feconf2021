import React, { useRef, useState } from 'react';
import { container, visible, title, toggleWrap, sessionCardContainer, sessionRow } from './SessionSection.module.scss';
import Toggle from "~/components/SessionSection/components/Toggle/Toggle";
import SessionCard from "~/components/SessionSection/components/SessionCard/SessionCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface SessionSectionProps {}

const SessionSection: React.FC<SessionSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const [selectedSessionType, setSession] = useState<SessionType>('A');
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
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
