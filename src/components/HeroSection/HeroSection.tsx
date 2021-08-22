import React from 'react';
import { container, videoWrap, headingWrap, heading, circle, dimmed } from './HeroSection.module.scss';
import BackgroundVideo from "~/components/BackgroundVideo/BackgroundVideo";

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
          <div className={circle}/>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
