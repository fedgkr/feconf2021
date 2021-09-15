import React, { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { container, textContainer, shareContainer, circle, shareSection } from './LinkShareSection.module.scss';
import planet from '~/images/icon/planet.svg';

interface LinkShareSectionProps {}

const LinkShareSection: React.FC<LinkShareSectionProps> = () => {
  const [link, setLink] = useState('');
  const ref = useRef<ClipboardJS>();
  useEffect(() => {
    setLink(location.origin);
    if (link && !ref.current) {
      ref.current = new ClipboardJS('#share-link');
      ref.current.on('success', () => {
        
      });
    }
  }, [link]);
  return (
    <div className={container}>
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
    </div>
  );
}

export default LinkShareSection;
