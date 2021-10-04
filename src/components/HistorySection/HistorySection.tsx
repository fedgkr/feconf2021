import React, { useEffect, useRef, useState } from 'react';
import { container, visible, heading, paragraph, historyContainer, history, imageWrap } from './HistorySection.module.scss';
import classcat from "classcat";
import fiveImage from '~/images/history/5.png';
import rocketImage from '~/images/history/rocket.png';
import peopleImage from '~/images/history/people.png';
import Br from "~/components/Br/Br";
import { useIntersection } from "use-intersection";
import { animated, config, useSpring } from "react-spring";

interface HistorySectionProps {}

const formatter = new Intl.NumberFormat('ko');
const constants = {
  anniversary: 5,
  speakers: 120,
  people: 73400,
};

const HistorySection: React.FC<HistorySectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const [anniversary, setAnniversary] = useState(0);
  const [speakers, setSpeakers] = useState(0);
  const [people, setPeople] = useState(0);
  const { value: anniversaryValue } = useSpring({ from: { value: 0 }, to: { value: anniversary }, config: config.slow, delay: 200 });
  const { value: speakersValue } = useSpring({ from: { value: 0 }, to: { value: speakers }, config: config.slow, delay: 400 });
  const { value: peopleValue } = useSpring({ from: { value: 0 }, to: { value: people }, config: config.slow, delay: 600});
  useEffect(() => {
    if (isVisible) {
      setAnniversary(constants.anniversary);
      setSpeakers(constants.speakers);
      setPeople(constants.people);
    }
  }, [isVisible]);
  return (
    <div ref={ref} className={classcat([container, isVisible ? visible : ''])} id="event">
      <h2 className={heading}>
        국내 최고의 프론트엔드 <Br mobile/> 컨퍼런스 <Br desktop/>
        FEConf가 <Br mobile/>5주년을 맞이합니다.
      </h2>
      <p className={paragraph}>
        FEConf는 프론트엔드를 개발하며 마주했던 치열한<Br mobile/> 고민과 깊은 인사이트를 <Br desktop/>
        공유하고 함께 성장하는<Br mobile/> 국내 최고의 프론트엔드 개발 컨퍼런스입니다.<Br mobile/> <Br desktop/>
      </p>
      <ul className={historyContainer}>
        <li className={history}>
          <div className={imageWrap}>
            <img src={fiveImage} alt="5주년"/>
            <div></div>
          </div>
          <animated.h4>{anniversaryValue.to(val => Math.ceil(val) + '주년')}</animated.h4>
          <span>FEConf와 함께한 시간</span>
        </li>
        <li className={history}>
          <div className={imageWrap}>
            <img src={rocketImage} alt="120명"/>
            <div></div>
          </div>
          <animated.h4>{speakersValue.to(val => Math.floor(val) + '명')}</animated.h4>
          <span>5년간 지식을 공유해준 스피커</span>
        </li>
        <li className={history}>
          <div className={imageWrap}>
            <img src={peopleImage} alt="73,400명"/>
            <div></div>
          </div>
          <animated.h4>{peopleValue.to(val => formatter.format(Math.floor(val)) + '명')}</animated.h4>
          <span>5년간 FEConf를 찾아준 인원</span>
        </li>
      </ul>
    </div>
  );
}

export default HistorySection;
