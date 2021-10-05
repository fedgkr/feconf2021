import React, { useRef } from 'react';
import { container, textWrap, image, background } from './SpeakerCard.module.scss';
import { useIntersection } from "use-intersection";
import FadeInImage from "~/components/FadeInImage/FadeInImage";

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  const ref = useRef<HTMLDivElement>();
  const isVisible = useIntersection(ref);
  return (
    <div ref={ref} className={container}>
      <div className={textWrap}>
        <span>{speaker.company}</span>
        <h3>{speaker.name}</h3>
      </div>
      <FadeInImage className={image} src={isVisible ? speaker.imageUrl : null} alt={speaker.name}/>
      <div className={background}/>
    </div>
  );
}

export default SpeakerCard;
