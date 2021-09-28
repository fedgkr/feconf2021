import React from 'react';
import { container, title, description, speakerContainer, speakerRow } from './SpeakerSection.module.scss';
import SpeakerCard from "~/components/SpeakerSection/components/SpeakerCard/SpeakerCard";

interface SpeakerSectionProps {}

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  return (
    <section className={container}>
      <h2 className={title}>스피커를 소개</h2>
      <p className={description}>경험을 공유해줄 12명의 멋진 연사를 소개합니다.</p>
      <div className={speakerContainer}>
        <div className={speakerRow}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
        <div className={speakerRow}>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </div>
      </div>
    </section>
  );
}

export default SpeakerSection;
