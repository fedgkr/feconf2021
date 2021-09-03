import React from 'react';
import { container, videoWrap, headingWrap, heading, circle, noiseWrap, dimmed } from './HeroSection.module.scss';
import ellipse from '~/images/hero/ellipse.png';
import noise from '~/images/hero/noise.png';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className={container}>
      <div className={videoWrap}>
        <div className="stretch">
          {/*<BackgroundVideo/>*/}
          <div className={dimmed}/>
        </div>
      </div>
      <div className={headingWrap}>
        <h1 className={heading}>
          FE <br/>
          CONF <br/>
          2021.
          <div className={circle} style={{ backgroundImage: `url(${ellipse})` }}>
            <div className={noiseWrap} style={{ backgroundImage: `url(${noise})` }}/>
          </div>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
