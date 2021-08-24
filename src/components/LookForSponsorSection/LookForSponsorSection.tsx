import React from 'react';
import { container, heading, sponsorHistory } from './LookForSponsorSection.module.scss';
import sponsorImage from '~/images/sponsor/sponsors.png';

interface LookForSponsorSectionProps {}

const LookForSponsorSection: React.FC<LookForSponsorSectionProps> = () => {
  return (
    <div className={container}>
      <div className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 모집합니다
        </h2>
        <p>
          FECONF에서 스폰서를 모집합니다. 컨퍼런스 후원을 통해 프론트엔드 개발자 <br/>
          문화를 만들고, 기업 홍보 및 채용 활동 등을 계획해 보세요!
        </p>
      </div>
      <div className={sponsorHistory}>
        <strong>지금까지 FECONF와 함께한 파트너</strong>
        <ul>
          <li>
            <img src={sponsorImage} alt=""/>
          </li>
          {/*<li>쿠팡</li>*/}
          {/*<li>당근마켓</li>*/}
          {/*<li>토스</li>*/}
          {/*<li>네이버</li>*/}
          {/*<li>뱅크샐러드</li>*/}
          {/*<li>클래스101</li>*/}
        </ul>
      </div>
      <button>후원사로 참여하기</button>
    </div>
  );
}

export default LookForSponsorSection;
