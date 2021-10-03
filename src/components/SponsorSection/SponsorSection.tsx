import React, { useRef } from 'react';
import { container, visible, heading, sponsorRow, sponsorContainer } from './SponsorSection.module.scss';
import banksalad from '~/images/sponsor/banksalad.png';
import class101 from '~/images/sponsor/class101.png';
import coupang from '~/images/sponsor/coupang.png';
import jetbrains from '~/images/sponsor/jetbrains.png';
import karrot from '~/images/sponsor/karrot.png';
import naver from '~/images/sponsor/naver.png';
import programmers from '~/images/sponsor/programmers.png';
import soomgo from '~/images/sponsor/soomgo.png';
import toss from '~/images/sponsor/toss.png';
import SponsorCard from "~/components/SponsorSection/components/SponsorCard/SponsorCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";

const imageUrlMap = {
  banksalad: banksalad,
  class101: class101,
  coupang: coupang,
  jetbrains: jetbrains,
  karrot: karrot,
  naver: naver,
  programmers: programmers,
  soomgo: soomgo,
  toss: toss,
};

interface SponsorSectionProps {}

const SponsorSection: React.FC<SponsorSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="sponsor">
      <div className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 소개합니다
        </h2>
        <p>
          FECONF은 여러분과 후원사의 지원을 통해 진행하는 비영리 단체입니다.
        </p>
      </div>
      <div>
        <div className={sponsorContainer}>
          <div className={sponsorRow}>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
          </div>
        </div>
        <div className={sponsorContainer}>
          <div className={sponsorRow}>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
            <SponsorCard/>
            <SponsorCard/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
            <SponsorCard/>
            <div style={{ width: '100%' }}/>
          </div>
          <div className={sponsorRow}>
            <SponsorCard/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
