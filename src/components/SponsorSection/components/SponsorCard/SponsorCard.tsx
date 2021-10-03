import React from 'react';
import { container, visible, image, grade, name } from './SponsorCard.module.scss';
import toss from '~/images/sponsor/toss.png';
import classcat from "classcat";

interface SponsorCardProps {
  sponsor: Sponsor;
  display?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, display = true }) => {
  return (
    <div className={classcat([container, display ? visible : ''])}>
      <img className={image} src={toss} alt={sponsor.name}/>
      <div className={grade}>{sponsor.grade}</div>
      <div className={name}>{sponsor.name}</div>
    </div>
  );
}

export default SponsorCard;
