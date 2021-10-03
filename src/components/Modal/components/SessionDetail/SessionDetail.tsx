import React from 'react';
import { container, closeBtn, header, content, tagList, speaker, button } from './SessionDetail.module.scss';
import Modal from "~/components/Modal/Modal";
import { useSessionDetail } from "~/data/states/modal.state";

interface SessionDetailProps {}

const SessionDetail: React.FC<SessionDetailProps> = () => {
  const [detail, setDetail] = useSessionDetail();
  return (
    <Modal active={detail.active} needWrap={false} onClose={() => setDetail({ active: false })}>
      <div className={container}>
        <div className={closeBtn} onClick={() => setDetail({ active: false })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5L15 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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
            <button>10.30 오픈예정</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SessionDetail;
