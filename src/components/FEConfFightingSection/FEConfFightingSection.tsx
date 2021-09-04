import React from 'react';
import { container, contentsWrap, ellipse, textContainer, messagesWrap } from './FEConfFightingSection.module.scss';
import right from '~/images/icon/right-white.svg';
import Br from "~/components/Br/Br";
import { useReservationModal } from "~/data/states/modal.state";
import RotatingMessageList from "~/components/FEConfFightingSection/components/RotatingMessageList/RotatingMessageList";

interface FEConfFightingSectionProps {}

const FEConfFightingSection: React.FC<FEConfFightingSectionProps> = () => {
  const [, setModal] = useReservationModal();
  return (
    <div className={container}>
      <div className={contentsWrap}>
        <div className={textContainer}>
          <h2>
            사전 등록하고 <Br desktop/>
            응원<Br mobile/> 메세지를 <Br desktop/>
            남겨보세요
          </h2>
          <p>
            사전 등록으로 FEConf2021을 응원해주세요! <Br mobile desktop/>
            여러분들의 응원에 힘입어 더 알찬 FEConf가 찾아옵니다. <Br desktop/>
            등록한 이메일로 FEConf 소식을 받을 수 있어요.
          </p>
          <button onClick={() => setModal(true)}>
            <span>사전등록하기</span>
            <img src={right}/>
          </button>
        </div>
        <div className={ellipse}/>
      </div>
      <div className={messagesWrap}>
        <RotatingMessageList/>
      </div>
    </div>
  );
}

export default FEConfFightingSection;
