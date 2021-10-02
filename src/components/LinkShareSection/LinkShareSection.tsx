import React, { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { container, visible, textContainer, shareContainer, circle, shareSection } from './LinkShareSection.module.scss';
import planet from '~/images/icon/planet.svg';
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface LinkShareSectionProps {}

const LinkShareSection: React.FC<LinkShareSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, threshold: .3 });
  const [link, setLink] = useState('');
  const clipboard = useRef<ClipboardJS>();
  useEffect(() => {
    setLink(location.origin);
    if (link && !clipboard.current) {
      clipboard.current = new ClipboardJS('#share-link');
      clipboard.current.on('success', () => {
      });
    }
  }, [link]);
  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
      <div className={textContainer}>
        <strong>2021. 10. 30</strong>
        <h3>FECONF</h3>
      </div>
      <div className={shareContainer}>
        <div className={circle}>
          <img src={planet} alt=""/>
        </div>
        <div className={shareSection}>
          <span>주변 친구에게 FECONF를 공유해보세요!</span>
          <button id="share-link" data-clipboard-text={link}>링크 복사</button>
        </div>
      </div>
    </section>
  );
}

export default LinkShareSection;
