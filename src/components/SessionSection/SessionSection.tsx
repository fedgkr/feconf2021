import React, { useMemo, useRef, useState } from 'react';
import classcat from "classcat";
import { container, visible, title, toss, toggleWrap, sessionCardContainer, sessionRow } from './SessionSection.module.scss';
import Toggle from "~/components/SessionSection/components/Toggle/Toggle";
import SessionCard from "~/components/SessionSection/components/SessionCard/SessionCard";
import { useIntersection } from "use-intersection";
import { sessions } from "~/data/db/sessions";
import tossImage from '~/images/icon/toss.png';
import rightImage from '~/images/icon/toss_right.png';
import TimeTag from "~/components/TimeTag/TimeTag";
import SafeLink from "~/components/SafeLink/SafeLink";
import Br from "~/components/Br/Br";

interface SessionSectionProps {}

const SessionSection: React.FC<SessionSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const [selectedSessionType, setSession] = useState<SessionType>('A');
  const sortedSessions = useMemo(() => [...sessions].sort((a, b) => a.index - b.index), [sessions]);
  const sessionList = useMemo(() => sortedSessions.filter((s) => s.type === selectedSessionType), [sortedSessions, selectedSessionType]);
  const specialSession = useMemo(() => sortedSessions.find(session => session.type === 'SPECIAL'), [sortedSessions]);
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="sessions">
      <h2 className={title}>세션 소개</h2>
      <div className={toss}>
        <h4>{specialSession.speaker.name} / {specialSession.speaker.company}</h4>
        <SafeLink href="#">
          <p><img src={tossImage}/>{specialSession.title}<img src={rightImage}/></p>
        </SafeLink>
        <TimeTag time="11:00 ~ 11:10"/>
      </div>
      <div className={toggleWrap}>
        <Toggle session={selectedSessionType} onSessionChange={setSession}/>
      </div>
      <div className={sessionCardContainer}>
        <div className={sessionRow}>
          {sessionList.slice(0, 2).map((session) => (
            <SessionCard key={session.title} session={session}/>
          ))}
        </div>
        <div className={sessionRow}>
          {sessionList.slice(2, 4).map((session) => (
            <SessionCard key={session.title} session={session}/>
          ))}
        </div>
        <div className={sessionRow}>
          {sessionList.slice(4, 6).map((session) => (
            <SessionCard key={session.title} session={session}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SessionSection;
