import React from 'react';
import { container, contentsWrap, textContainer } from './FEConfFightingSection.module.scss';

interface FEConfFightingSectionProps {}

const FEConfFightingSection: React.FC<FEConfFightingSectionProps> = () => {
  return (
    <div className={container}>
      <div className={contentsWrap}>
        <div className={textContainer}>
          <h2>
            사전 등록하고 <br/>
            응원 메세지를 <br/>
            남겨보세요
          </h2>
          <p>
            사전 등록으로 FEConf2021을 응원해주세요! <br/>
            여러분들의 응원에 힘입어 더 알찬 FEConf가 찾아옵니다. <br/>
            등록한 이메일로 FEConf 소식을 받을 수 있어요.
          </p>
          <button>사전등록하기</button>
        </div>
      </div>
    </div>
  );
}

export default FEConfFightingSection;
