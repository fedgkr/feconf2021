import React from 'react';
import { container, visible, image, grade, name } from './SponsorCard.module.scss';
import classcat from "classcat";
import SafeLink from "~/components/SafeLink/SafeLink";

interface SponsorCardProps {
  sponsor: Sponsor;
  display?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, display = true }) => {
  return (
    <SafeLink href={sponsor.link}>
      <div className={classcat([container, display ? visible : ''])}>
        <img className={image} src={sponsor.imageUrl} alt={sponsor.name}/>
        <div className={grade}>{sponsor.grade}</div>
        <div className={name}>{sponsor.name}</div>
      </div>
    </SafeLink>
  );
}

export default SponsorCard;
