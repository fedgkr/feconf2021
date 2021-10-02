import React from 'react';
import { container, visible, image, grade, name } from './SponsorCard.module.scss';
import toss from '~/images/sponsor/toss.png';
import classcat from "classcat";

interface SponsorCardProps {
  display?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ display = true }) => {
  return (
    <div className={classcat([container, display ? visible : ''])}>
      <img className={image} src={toss} alt="company name"/>
      <div className={grade}>Diamond</div>
      <div className={name}>비바리퍼블리카</div>
    </div>
  );
}

export default SponsorCard;
