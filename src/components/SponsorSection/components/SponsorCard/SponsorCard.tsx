import React, { useRef } from 'react';
import { container, visible, image, grade, name } from './SponsorCard.module.scss';
import classcat from "classcat";
import SafeLink from "~/components/SafeLink/SafeLink";
import { useIntersection } from "use-intersection";
import FadeInImage from "~/components/FadeInImage/FadeInImage";

interface SponsorCardProps {
  sponsor: Sponsor;
  display?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, display = true }) => {
  const ref = useRef<HTMLDivElement>();
  const isVisible = useIntersection(ref)
  return (
    <SafeLink href={sponsor.link}>
      <div ref={ref} className={classcat([container, display ? visible : ''])}>
        <FadeInImage className={image} src={isVisible ? sponsor.imageUrl : null} alt={sponsor.name}/>
        <div className={grade}>{sponsor.grade}</div>
        <div className={name}>{sponsor.name}</div>
      </div>
    </SafeLink>
  );
}

export default SponsorCard;
