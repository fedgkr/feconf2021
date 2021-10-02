import React, { memo, useRef } from 'react';
import { container, visible, title, description, speakerContainer, speakerRow, pillar } from './SpeakerSection.module.scss';
import SpeakerCard from "~/components/SpeakerSection/components/SpeakerCard/SpeakerCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import useOnContainerScroll from "~/hooks/useOnContainerScroll";

interface SpeakerSectionProps {}

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  const ref = useRef();
  const firstRowRef = useRef<HTMLDivElement>();
  const lastRowRef = useRef<HTMLDivElement>();
  const pillarRef = useRef<HTMLDivElement>();
  const isVisible = useIntersection(ref, { once: true, rootMargin: '-200px 0px' });
  const { scrollInfo, dimension } = useOnContainerScroll(pillarRef, () => {
    console.log('dimension :', dimension);
    if (window.innerWidth > 1024) {
      const firstTransform = `translate3d(-${80 - (scrollInfo.progress * 80)}%, 0, 0);`;
      const lastTransform = `translate3d(${80 - (scrollInfo.progress * 80)}%, 0, 0);`;
      firstRowRef.current!.style.transform = firstTransform;
      firstRowRef.current!.style.webkitTransform = firstTransform;
      lastRowRef.current!.style.transform = lastTransform;
      lastRowRef.current!.style.webkitTransform = lastTransform;
    }
  });
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
      <h2 className={title}>스피커를 소개</h2>
      <p className={description}>경험을 공유해줄 12명의 멋진 연사를 소개합니다.</p>
      <div className={speakerContainer}>
        <div ref={firstRowRef} className={speakerRow}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
        <div ref={lastRowRef} className={speakerRow}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
      </div>
      <div ref={pillarRef} className={pillar} />
    </section>
  );
};

export default SpeakerSection;
