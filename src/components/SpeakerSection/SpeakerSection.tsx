import React, { useRef } from 'react';
import { container, visible, title, description, speakerContainer, speakerRow } from './SpeakerSection.module.scss';
import SpeakerCard from "~/components/SpeakerSection/components/SpeakerCard/SpeakerCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import useOnContainerScroll from "~/hooks/useOnContainerScroll";
import { sessions } from "~/data/db/sessions";

interface SpeakerSectionProps {}

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  const ref = useRef();
  const firstRowRef = useRef<HTMLDivElement>();
  const lastRowRef = useRef<HTMLDivElement>();
  const speakersRef = useRef<HTMLDivElement>();
  const isVisible = useIntersection(ref, { once: true, rootMargin: '-200px 0px' });
  const speakers = sessions.filter(session => session.type !== 'SPECIAL').map(session => session.speaker);
  const { scrollInfo, dimension } = useOnContainerScroll(speakersRef, () => {
    if (window.innerWidth > 1024) {
      const progress = Math.min(Math.max(0, scrollInfo.scrollY / dimension.windowHeight), 1);
      const firstTransform = `translate3d(${progress * 85}%, 0, 0)`;
      const lastTransform = `translate3d(-${progress * 85}%, 0, 0)`;
      firstRowRef.current!.style.transform = firstTransform;
      firstRowRef.current!.style.webkitTransform = firstTransform;
      lastRowRef.current!.style.transform = lastTransform;
      lastRowRef.current!.style.webkitTransform = lastTransform;
    }
  });
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="speakers">
      <h2 className={title}>스피커 소개</h2>
      <p className={description}>소중한 경험을 공유해줄 12명의 멋진 스피커를 소개합니다.</p>
      <div ref={speakersRef} className={speakerContainer}>
        <div ref={firstRowRef} className={speakerRow}>
          { speakers.slice(0, 6).map(speaker => (
            <SpeakerCard key={speaker.name} speaker={speaker}/>
          )) }
        </div>
        <div ref={lastRowRef} className={speakerRow}>
          { speakers.slice(6, 12).map(speaker => (
            <SpeakerCard key={speaker.name} speaker={speaker}/>
          )) }
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
