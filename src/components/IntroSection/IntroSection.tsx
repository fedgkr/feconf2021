import React from 'react';
import { container } from './IntroSection.module.scss';

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  return (
    <section className={container}>
      <div>
        <h2>국내 최고 프론트 엔드</h2>
        <h2>개발 컨퍼런스</h2>
      </div>
      <h3>Broaden Your Experience</h3>
      <p>
        <span>프론트엔드 개발의 소중한 경험을 공유합니다!</span><br/>
        <span>5주년을 맞은 FEConf가 여러분을 찾아갑니다.</span>
      </p>
    </section>
  );
}

export default IntroSection;
