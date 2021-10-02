import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { container, visible, title, description, speakerContainer, speakerRow } from './SpeakerSection.module.scss';
import SpeakerCard from "~/components/SpeakerSection/components/SpeakerCard/SpeakerCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface SpeakerSectionProps {}

interface ScrollInfo {
  scrollY: number;
  progress: number;
}

function useOnContainerScroll(container: MutableRefObject<HTMLElement>, onScroll: (info: ScrollInfo) => void) {
  const dimension = {
    top: 0,
    width: 0,
    height: 0,
    scrollHeight: 0,
  };
  const scrollInfo: ScrollInfo = {
    scrollY: 0,
    progress: 0,
  };
  const onFireScroll = () => {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset + window.innerHeight;
      scrollInfo.scrollY = Math.max(scrolled - dimension.top, 0);
      scrollInfo.progress = Math.min(scrollInfo.scrollY / dimension.scrollHeight, 1);
      onScroll(scrollInfo);
    });
  }
  const setDimension = () => {
    if (container.current) {
      dimension.width = container.current.clientWidth;
      dimension.height = container.current.clientHeight;
      dimension.scrollHeight = container.current.clientHeight;
      dimension.top = container.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    }
    onFireScroll();
  }
  useEffect(() => {
    window.addEventListener('scroll', onFireScroll);
    window.addEventListener('resize',  setDimension);
    setDimension();
    return () => {
      window.removeEventListener('scroll', onFireScroll);
      window.removeEventListener('resize',  setDimension);
    };
  }, []);
  return {
    dimension,
    scrollInfo,
  };
}

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, threshold: .3 });
  const [progress, setProgress] = useState(0);
  const { dimension, scrollInfo } = useOnContainerScroll(ref, () => {
    console.log('dimension :', dimension);
    if (window.innerWidth <= 1024) {

    } else {
      setProgress(scrollInfo.progress);
    }
  });
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
      <h2 className={title}>스피커를 소개</h2>
      <p className={description}>경험을 공유해줄 12명의 멋진 연사를 소개합니다.</p>
      <div className={speakerContainer}>
        <div className={speakerRow} style={{ right: `${50 - (progress * 50)}%` }}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
        <div className={speakerRow} style={{ left: `${50 - (progress * 50)}%` }}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
      </div>
    </section>
  );
}

export default SpeakerSection;
