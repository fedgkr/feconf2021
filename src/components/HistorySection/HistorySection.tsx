import React from 'react';
import { container, heading, paragraph, historyContainer, history } from './HistorySection.module.scss';
import fiveImage from '~/images/history/5.png';

interface HistorySectionProps {}

const HistorySection: React.FC<HistorySectionProps> = () => {
  return (
    <div className={container}>
      <h2 className={heading}>
        국내 최대 규모 프론트엔드<br className="mobile"/> 컨퍼런스 <br className="desktop"/>
        FECONF가 <br className="mobile"/>5주년을 맞이합니다.
      </h2>
      <p className={paragraph}>
        FECONF는 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 <br className="desktop"/>
        함께 공유하고 성장을 도모하는 국내 최고의 프론트엔드 개발 컨퍼런스입니다. <br className="desktop"/>
        5주년을 맞이해 더욱 알찬 내용을 가지고 찾아옵니다!
      </p>
      <ul className={historyContainer}>
        <li className={history}>
          <img src={fiveImage} alt="5주년"/>
          <h4>5주년</h4>
          <span>FECONF 함께한 시간</span>
        </li>
        <li className={history}>
          <img src={fiveImage} alt="120명"/>
          <h4>120명</h4>
          <span>5년간 지식을 공유해준 스피커</span>
        </li>
        <li className={history}>
          <img src={fiveImage} alt="63,400명"/>
          <h4>63,400명</h4>
          <span>5년간 FECONF를 찾아준 인원</span>
        </li>
      </ul>
    </div>
  );
}

export default HistorySection;
