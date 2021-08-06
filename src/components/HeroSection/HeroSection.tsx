import React from 'react';
import { container, videoWrap, dimmed } from './HeroSection.module.scss';
import BackgroundVideo from "~/components/BackgroundVideo/BackgroundVideo";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className={container}>
      <div className={videoWrap}>
        <div className="stretch">
          <BackgroundVideo/>
          <div className={dimmed}/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
