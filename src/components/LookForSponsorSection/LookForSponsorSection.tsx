import React from 'react';
import { container, heading, sponsorHistory, sponsorContainer, mobileSponsorContainer, row, leftShadow, rightShadow } from './LookForSponsorSection.module.scss';
import { pastSponsors } from "~/data/const/past-sponsors";
import banksalad from '~/images/sponsor/banksalad.png';
import class101 from '~/images/sponsor/class101.png';
import coupang from '~/images/sponsor/coupang.png';
import jetbrains from '~/images/sponsor/jetbrains.png';
import karrot from '~/images/sponsor/karrot.png';
import naver from '~/images/sponsor/naver.png';
import programmers from '~/images/sponsor/programmers.png';
import soomgo from '~/images/sponsor/soomgo.png';
import toss from '~/images/sponsor/toss.png';
import right from '~/images/icon/right-white.svg';
import InfiniteSlide from "~/components/InfiniteSlide/InfiniteSlide";
import Br from "~/components/Br/Br";

const imageUrlMap = {
  banksalad: banksalad,
  class101: class101,
  coupang: coupang,
  jetbrains: jetbrains,
  karrot: karrot,
  naver: naver,
  programmers: programmers,
  soomgo: soomgo,
  toss: toss,
};

interface LookForSponsorSectionProps {}

const LookForSponsorSection: React.FC<LookForSponsorSectionProps> = () => {
  return (
    <div className={container} id="sponsor">
      <div className={heading}>
        <h2>
          5주년을 함께 맞이 할 <br/>
          멋진 파트너를 모집합니다
        </h2>
        <p>
          FECONF에서 스폰서를 모집합니다. 컨퍼런스<Br mobile/> 후원을 통해 프론트엔드 개발자 <Br desktop/>
          문화를 만들고,<Br mobile/> 기업 홍보 및 채용 활동 등을 계획해 보세요!
        </p>
      </div>
      <div className={sponsorHistory}>
        <strong>지금까지 FECONF와 함께한 파트너</strong>
        <div className={sponsorContainer}>
          <InfiniteSlide>
            <ul>
              { pastSponsors.map(({ key }) => {
                return (
                  <li key={key} className={key}>
                    <img src={imageUrlMap[key]} alt={key}/>
                  </li>
                );
              }) }
            </ul>
          </InfiniteSlide>
          <div className={leftShadow}/>
          <div className={rightShadow}/>
        </div>
        <div className={mobileSponsorContainer}>
          {
            pastSponsors.reduce((acc, item, index) => {
              const i = index % 3;
              if (i === 0) {
                acc.push([]);
              }
              const row = acc[acc.length - 1];
              row.push(item);
              return acc;
            }, []).map((itemRow, index) => {
              return (
                <div className={row} key={index}>
                  { itemRow.map(({ key }) => {
                    return (
                      <a href="" key={key}>
                        <img src={imageUrlMap[key]} alt={key}/>
                      </a>
                    );
                  }) }
                </div>
              )
            })
          }
        </div>
      </div>
      <button>
        <span>후원사로 참여하기</span>
        <img src={right}/>
      </button>
    </div>
  );
}

export default LookForSponsorSection;
