import React, { useEffect, useRef, useState } from 'react';
import noiseImage from '~/images/noise.png';
import ClipboardJS from 'clipboard';
import { container, noticeContainer, buttonWrap, visible, textContainer, shareContainer, background, shareSection } from './LinkShareSection.module.scss';
import { useIntersection } from "use-intersection";
import classcat from "classcat";
import SafeLink from "~/components/SafeLink/SafeLink";
import Arrow from "~/components/Arrow/Arrow";
import { FACEBOOK_FECONF_URL, FECONF_EMAIL, YOUTUBE_CHANNEL_URL } from "~/data/const/links";
import Br from "~/components/Br/Br";

interface LinkShareSectionProps {}

const LinkShareSection: React.FC<LinkShareSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const [link, setLink] = useState('');
  const clipboard = useRef<ClipboardJS>();

  useEffect(() => {
    setLink(location.origin);
    if (link && !clipboard.current) {
      clipboard.current = new ClipboardJS('#share-link');
      clipboard.current.on('success', () => {
        alert('링크를 복사했습니다.');
      });
    }
  }, [link]);

  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
      <div className={noticeContainer}>
        <h2>NOTICE</h2>
        <p>다양한 SNS를 통해 FEConf2021<Br mobile/> 소식을  받아보세요. </p>
        <div className={buttonWrap}>
          <SafeLink href={FACEBOOK_FECONF_URL}>
            <button>
              <img src="/images/icons/facebook.png" alt="페이스북 그룹"/>
              <span>Facebook</span>
              <Arrow/>
            </button>
          </SafeLink>
          <SafeLink href={YOUTUBE_CHANNEL_URL}>
            <button>
              <img src="/images/icons/youtube.png" alt="FEConf 유튜브 채널"/>
              <span>Youtube</span>
              <Arrow/>
            </button>
          </SafeLink>
          <SafeLink href={`mailto:${FECONF_EMAIL}`}>
            <button>
              <img src="/images/icons/mail.png" alt="메일 문의"/>
              <span>Email Us</span>
              <Arrow/>
            </button>
          </SafeLink>
        </div>
      </div>
      <div className={shareContainer}>
        <div className={background} style={{ backgroundImage: `url(${noiseImage})` }}/>
        <div className={textContainer}>
          <strong>2021. 10. 30</strong>
          <h3>FECONF</h3>
        </div>
        <div className={shareSection}>
          <p>주변 친구에게 FEConf를 공유해보세요!</p>
          <button id="share-link" data-clipboard-text={link}>
            <img src="/images/icons/link.png"/>
            <span>링크 복사</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LinkShareSection;
