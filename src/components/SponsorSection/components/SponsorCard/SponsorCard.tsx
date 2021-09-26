import React from 'react';
import { container, image, grade, name } from './SponsorCard.module.scss';
import toss from '~/images/sponsor/toss.png';

interface SponsorCardProps {}

const SponsorCard: React.FC<SponsorCardProps> = () => {
  return (
    <div className={container}>
      <img className={image} src={toss} alt="company name"/>
      <div className={grade}>Diamond</div>
      <div className={name}>비바리퍼블리카</div>
    </div>
  );
}

export default SponsorCard;
