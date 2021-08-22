import React from 'react';
import noiseImage from '~/images/noise.png';
import earthImage from '~/images/earth.png';
import { container, title, background, heading, heading2, paragraph, earth } from './IntroSection.module.scss';
import { StaticImage } from "gatsby-plugin-image";

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  return (
    <section className={container}>
      <h4 className={title}>2021 Conference Theme</h4>
      <div className={heading}>
        <h2>시대를 앞서는 프론트엔드</h2>
        <h2>개발자 컨퍼런스</h2>
      </div>
      <h3 className={heading2}>Broaden Your Experience</h3>
      <p className={paragraph}>
        <span>기술 트렌드를 주도하는 프론트엔드 개발자들의 치열한 이야기를</span><br/>
        <span>FECONF와 함께 <strong>2021년 10월 30일</strong> 유튜브로 찾아옵니다.</span>
      </p>
      <div className={background} style={{ backgroundImage: `url(${noiseImage})` }}>
        <div className={earth}>
          <StaticImage src="../../images/earth.png" alt="FEConf Planet"/>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
