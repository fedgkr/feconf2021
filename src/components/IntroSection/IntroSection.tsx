import React, { useRef } from 'react';
import noiseImage from '~/images/noise.png';
import earthImage from '~/images/earth.png';
import { container, visible, text, title, background, heading, heading2, paragraph, earth } from './IntroSection.module.scss';
import Br from "~/components/Br/Br";
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import useOnContainerScroll from "~/hooks/useOnContainerScroll";
import SafeLink from "~/components/SafeLink/SafeLink";
import { YOUTUBE_CHANNEL_URL } from "~/data/const/links";

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  const ref = useRef();
  const earthRef = useRef<HTMLImageElement>();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const { scrollInfo, dimension } = useOnContainerScroll(ref, () => {
    const height = dimension.scrollHeight / 2;
    const opacity = Math.min(Math.max(scrollInfo.scrollY - height, 0) / height, 1);
    earthRef.current!.style.opacity = String(opacity);
  });
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="intro">
      <div className={text}>
        <h4 className={title}>2021 Conference Theme</h4>
        <div className={heading}>
          <h2>프론트엔드 개발의</h2>
          <h2>소중한 경험을 공유합니다!</h2>
        </div>
        <h3 className={heading2}>Broaden Your Experience</h3>
        <SafeLink href={YOUTUBE_CHANNEL_URL}>
          <p className={paragraph}>
            <span><strong>2021년 10월 30일</strong><Br mobile/> Live Streaming on YouTube</span>
          </p>
        </SafeLink>
      </div>
      <div className={background} style={{ backgroundImage: `url(${noiseImage})` }}>
        <div className={earth}>
          <img ref={earthRef} src={earthImage} alt="FEConf Planet"/>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
