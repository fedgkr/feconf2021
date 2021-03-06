import React, { useEffect, useRef, useState } from 'react';
import { container, headingVisible, sponsorVisible, heading, slashContainer, sponsorRow, grade, sponsorContainer } from './SponsorSection.module.scss';
import SponsorCard from "~/components/SponsorSection/components/SponsorCard/SponsorCard";
import Confetti from 'react-confetti';
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import { sponsors } from "~/data/db/sponsors";
import SafeLink from "~/components/SafeLink/SafeLink";
import { SLASH_21_URL } from "~/data/const/links";
import SlashLogo from "~/components/SlashLogo/SlashLogo";

const noopSponsor: Sponsor = {
  name: '',
  grade: 'Diamond',
  imageUrl: '',
  link: '',
};

interface SponsorSectionProps {}

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
}

const SponsorSection: React.FC<SponsorSectionProps> = () => {
  const windowSize = useWindowSize();
  const headingRef = useRef();
  const sponsorRef = useRef();
  const isHeadingVisible = useIntersection(headingRef.current, { once: true, rootMargin: '-200px 0px' });
  const isSponsorVisible = useIntersection(sponsorRef.current, { rootMargin: '-200px 0px' });
  const diamond = sponsors.filter(s => s.grade === 'Diamond');
  const platinum = sponsors.filter(s => s.grade === 'Platinum');
  const gold = sponsors.filter(s => s.grade === 'Gold');
  const place = sponsors.filter(s => s.grade === '장소지원');
  return (
    <section className={classcat({ [container]: true, [headingVisible]: isHeadingVisible, [sponsorVisible]: isSponsorVisible })} id="sponsors">
      { isHeadingVisible ? <Confetti {...windowSize} numberOfPieces={50} tweenDuration={1000}/> : null }
      <div ref={headingRef} className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 소개합니다
        </h2>
        <p>
          FEConf는 여러분과 후원사의 지원으로 만들어지는 비영리 단체입니다.
        </p>
      </div>
      <SafeLink href={SLASH_21_URL}>
        <div className={slashContainer}>
          <h3>Special Thanks to</h3>
          <SlashLogo/>
          <p>
            개발자 생태계 발전을 위한 SLASH의 후원에 깊이 감사드립니다!
          </p>
        </div>
      </SafeLink>
      <div ref={sponsorRef}>
        <div className={sponsorContainer}>
          <div className={classcat([sponsorRow, grade])}>
            { diamond.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(0, 4).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={classcat([sponsorRow, grade])}>
            { platinum.slice(4, 8).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={classcat([sponsorRow, grade])}>
            { gold.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { place.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
        </div>
        <div className={sponsorContainer}>
          <div className={classcat([sponsorRow, grade])}>
            { diamond.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(0, 3).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(3, 6).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={classcat([sponsorRow, grade])}>
            { platinum.slice(6, 8).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={classcat([sponsorRow, grade])}>
            { gold.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { place.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
