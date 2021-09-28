import React, { useRef } from 'react';
import { container, visible, wrap, textContainer, circle, backgroundImage } from './ChannelInfoSection.module.scss';
import planet from '~/images/icon/shiny-planet.png';
import right from '~/images/icon/right-black.svg';
import { YOUTUBE_CHANNEL_URL } from "~/data/const/links";
import SafeLink from "~/components/SafeLink/SafeLink";
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface ChannelInfoSectionProps {}

const ChannelInfoSection: React.FC<ChannelInfoSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, threshold: .3 });
  return (
    <div ref={ref} className={classcat([container, isVisible ? visible : ''])} >
      <div className={wrap}>
        <div className={textContainer}>
          <h2>
            온라인에서 <br/>
            생생한 경험을
          </h2>
          <p>
            유튜브로 공개되는 2021 FECONF 어디서든 <br/>
            만나볼 수 있어요. <br/><br/>
            FECONF가 5주년을 맞이해 이벤트를 진행합니다. <br/>
            유튜브 채널을 구독하시면 추첨을 통해 다양한<br/>
            상품을 드립니다.
          </p>
          <SafeLink href={YOUTUBE_CHANNEL_URL}>
            <button><span>유튜브 구독하기</span><img src={right}/></button>
          </SafeLink>
        </div>
        <div className={circle}>
          <img src={planet}/>
          <div className={backgroundImage}/>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfoSection;
