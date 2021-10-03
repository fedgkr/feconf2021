import React, { useRef } from 'react';
import { container, visible, heading, sponsorRow, sponsorContainer } from './SponsorSection.module.scss';
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
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const diamond = sponsors.filter(s => s.grade === 'Diamond');
  const platinum = sponsors.filter(s => s.grade === 'Platinum');
  const gold = sponsors.filter(s => s.grade === 'Gold');
  const place = sponsors.filter(s => s.grade === '장소지원');
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])} id="sponsors">
      <div className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 소개합니다
        </h2>
        <p>
          FEConf은 여러분과 후원사의 지원을 통해 진행하는 비영리 단체입니다.
        </p>
      </div>
      <div>
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
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
