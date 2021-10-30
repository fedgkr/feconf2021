import React, { MouseEventHandler } from 'react';
import { container, closeBtn, header, content, tagList, speaker, button } from './SessionDetail.module.scss';
import Modal from "~/components/Modal/Modal";
import { useSessionDetail } from "~/data/states/modal.state";
import SafeLink from "~/components/SafeLink/SafeLink";
import youtube from '~/images/icon/youtube.png';

interface SessionDetailProps {}

const SessionDetail: React.FC<SessionDetailProps> = () => {
  const [detail, setDetail] = useSessionDetail();
  const onClose: MouseEventHandler = (evt) => {
    evt.preventDefault();
    setDetail({ active: false });
  }
  return (
    <Modal active={detail.active} needWrap={false} onClose={onClose}>
      <div className={container}>
        <a href="#" className={closeBtn} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5L15 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className={header}>
          <div/>
          <div/>
        </div>
        <div className={content}>
          <h3>{ detail.data?.title }</h3>
          <div className={tagList}>
            { detail.data?.tags.map((tag) => <span key={tag}>{tag}</span>) }
          </div>
          <p>
            { detail.data?.description }
          </p>
          <div className={speaker}>
            { detail.data?.speaker.name } / { detail.data?.speaker.company }
          </div>
          <div className={button}>
            <SafeLink href={detail.data?.youtubeLink} onClick={evt => evt.stopPropagation()}>
              <button><img src={youtube}/><span>보러가기</span></button>
            </SafeLink>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SessionDetail;
