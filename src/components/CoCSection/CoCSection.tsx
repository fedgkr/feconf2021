import React from 'react';
import { container, contents, heading, list } from './CoCSection.module.scss';

interface CoCSectionProps {}

const CoCSection: React.FC<CoCSectionProps> = () => {
  return (
    <div className={container}>
      <div className={contents}>
        <div className={heading}>
          <h4>Code of Conduct</h4>
          <p>
            FECONF2021에 참여하는 모든 분은 <br/>
            다음 사항을 준수해주세요.
          </p>
        </div>
        <ul className={list}>

        </ul>
      </div>
    </div>
  );
}

export default CoCSection;
