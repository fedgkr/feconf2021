import React, { useRef } from 'react';
import { container, visible, heading, paragraph, historyContainer, history, imageWrap } from './HistorySection.module.scss';
import fiveImage from '~/images/history/5.png';
import rocketImage from '~/images/history/rocket.png';
import peopleImage from '~/images/history/people.png';
import Br from "~/components/Br/Br";
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface HistorySectionProps {}

const HistorySection: React.FC<HistorySectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  return (
    <div ref={ref} className={classcat([container, isVisible ? visible : ''])} id="event">
      <h2 className={heading}>
        국내 최대 규모 프론트엔드 <Br mobile/> 컨퍼런스 <Br desktop/>
        FECONF가 <Br mobile/>5주년을 맞이합니다.
      </h2>
      <p className={paragraph}>
        FECONF는 프론트엔드를 개발하며 마주했던 치열한<Br mobile/> 고민과 깊은 인사이트를 <Br desktop/>
        함께 공유하고 성장을<Br mobile/> 도모하는 국내 최고의 프론트엔드 개발 컨퍼런스입니다.<Br mobile/> <Br desktop/>
        5주년을 맞이해 더욱 알찬 내용을 가지고 찾아옵니다!
      </p>
      <ul className={historyContainer}>
        <li className={history}>
          <div className={imageWrap}>
            <img src={fiveImage} alt="5주년"/>
            <div></div>
          </div>
          <h4>5주년</h4>
          <span>FECONF와 함께한 시간</span>
        </li>
        <li className={history}>
          <div className={imageWrap}>
            <img src={rocketImage} alt="120명"/>
            <div></div>
          </div>
          <h4>120명</h4>
          <span>5년간 지식을 공유해준 스피커</span>
        </li>
        <li className={history}>
          <div className={imageWrap}>
            <img src={peopleImage} alt="63,400명"/>
            <div></div>
          </div>
          <h4>63,400명</h4>
          <span>5년간 FECONF를 찾아준 인원</span>
        </li>
      </ul>
    </div>
  );
}

export default HistorySection;
