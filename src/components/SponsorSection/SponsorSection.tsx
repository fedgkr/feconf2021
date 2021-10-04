import React, { useRef } from 'react';
import { container, headingVisible, sponsorVisible, heading, slashContainer, sponsorRow, sponsorContainer } from './SponsorSection.module.scss';
import SponsorCard from "~/components/SponsorSection/components/SponsorCard/SponsorCard";
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import { sponsors } from "~/data/db/sponsors";

const noopSponsor: Sponsor = {
  name: '',
  grade: 'Diamond',
  imageUrl: '',
  link: '',
};

interface SponsorSectionProps {}

const SponsorSection: React.FC<SponsorSectionProps> = () => {
  const headingRef = useRef();
  const sponsorRef = useRef();
  const isHeadingVisible = useIntersection(headingRef.current, { once: true, rootMargin: '-200px 0px' });
  const isSponsorVisible = useIntersection(sponsorRef.current, { once: true, rootMargin: '-300px 0px' });
  const diamond = sponsors.filter(s => s.grade === 'Diamond');
  const platinum = sponsors.filter(s => s.grade === 'Platinum');
  const gold = sponsors.filter(s => s.grade === 'Gold');
  const place = sponsors.filter(s => s.grade === '장소지원');
  return (
    <section className={classcat({ [container]: true, [headingVisible]: isHeadingVisible })} id="sponsors">
      <div ref={headingRef} className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 소개합니다
        </h2>
        <p>
          FEConf는 여러분과 후원사의 지원으로 만들어지는 비영리 단체입니다.
        </p>
      </div>
      <div className={slashContainer}>
        <h3>Special Thanks to</h3>
        <img src="/images/sponsors/slash.png" alt="Slash 21"/>
        <p>
          개발자 생태계 발전을 위한 SLASH의 후원에 깊히 감사드립니다!
        </p>
      </div>
      <div ref={sponsorRef} className={isSponsorVisible ? sponsorVisible : ''}>
        <div className={sponsorContainer}>
          <div className={sponsorRow}>
            { diamond.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(0, 4).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(4, 8).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { gold.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { place.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
        </div>
        <div className={sponsorContainer}>
          <div className={sponsorRow}>
            { diamond.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(0, 3).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(3, 6).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
          </div>
          <div className={sponsorRow}>
            { platinum.slice(6, 8).map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor}/>) }
            <SponsorCard sponsor={noopSponsor} display={false}/>
          </div>
          <div className={sponsorRow}>
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
