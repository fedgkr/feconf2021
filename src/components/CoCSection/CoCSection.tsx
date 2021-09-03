import React from 'react';
import { container, contents, heading, codeList } from './CoCSection.module.scss';
import { FECONF_EMAIL } from "~/data/const/links";

interface CoCSectionProps {}

const CoCSection: React.FC<CoCSectionProps> = () => {
  return (
    <div className={container}>
      <div className={contents}>
        <div className={heading}>
          <h3>Code of Conduct</h3>
          <p>
            FECONF2021에 참여하는 모든 분은 <br/>
            다음 사항을 준수해주세요.
          </p>
        </div>
        <ul className={codeList}>
          <li>
            <h4>다양성</h4>
            <p>FEConf는 개개인의 정체성과 개성 및 취향을 존중합니다. 하지만 성별, 성 정체성, 외모, 인종, 종교, 지역, 장애, 나이, 국가, 약자 등에 대한 혐오와 폭력은 어떤 방식이라도 허용하지 않습니다. </p>
          </li>
          <li>
            <h4>사회적 책임</h4>
            <p>FEConf참여자는 프론트엔드 분야의 성장에 대한 사회적 책임을 가집니다. 내가 알고 있는 지식은 아무리 작은 것이라도 다른 누군가에 도움을 줄 수 있습니다. 이를 다양한 방법으로 공유하세요. </p>
          </li>
          <li>
            <h4>서로 돕고 협력하기</h4>
            <p>참여자의 다양한 배경이 협업과 커뮤니케이션을 방해하는 요소가 될 수 없습니다. 도움을 요청하기 전에 먼저 도움을 주고 자신의 생각을 자유롭게 표현할 수 있는 FEConf가 될 수 있도록 노력해 주세요.</p>
          </li>
          <li>
            <h4>지식 재산권 및 개인 정보</h4>
            <p>FEConf는 지식 재산권과 개인 정보 등의 권리를 존중합니다. 지식 재산권을 위배하거나 개인 정보를 침해하는 어떠한 콘텐츠도 FEConf에서 사용할 수 없습니다.</p>
          </li>
          <li>
            <h4>참여</h4>
            <p>FEConf의 발전을 위해 도움을 주실 분은 언제든 환영합니다. <a href={`mailto:${FECONF_EMAIL}`}>{FECONF_EMAIL}</a>으로 메일을 보내주세요.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CoCSection;
