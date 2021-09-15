import React, { useCallback, useState } from 'react';
import { container, infoContainer, row, textContainer, warning, agreement, checkbox, checkedBox, preRegisterButton } from './Agreements.module.scss';
import classcat from "classcat";
import checked from "~/images/icon/checked.svg";
import { useAuthenticated } from "~/data/states/auth.state";
import { useFirebase } from "~/hooks/useFirestore";

interface AgreementsProps {}

const useSignIn = () => {
  const firebase = useFirebase();
  return useCallback(() => {
    try {
      history.replaceState(null, '', '/?loginRedirect=github');
      firebase?.signIn();
    } catch(err) {
      console.log('err : ', err.message);
      history.replaceState(null, '', '/');
    }
  }, [firebase]);
};

const Agreements: React.FC<AgreementsProps> = () => {
  const [isChecked, setChecked] = useState(false);
  const signIn = useSignIn();
  const onCheckClick = () => {
    setChecked(!isChecked);
  }
  return (
    <div className={container}>
      <div className={infoContainer}>
        <div className={row}>
          <label><span>1</span></label>
          <div className={textContainer}>
            <h4>수집항목</h4>
            <span>이메일, GitHub 유저네임, GitHub 이름, GitHub 프로필 이미지</span>
          </div>
        </div>
        <div className={row}>
          <label><span>2</span></label>
          <div className={textContainer}>
            <h4>수집 및 이용목적</h4>
            <span>참가자 본인 및 참가 의사 확인,  이메일로 행사 내용 전달</span>
          </div>
        </div>
        <div className={row}>
          <label><span>3</span></label>
          <div className={textContainer}>
            <h4>보관 기간</h4>
            <span>행사 종료 후 즉시 파기</span>
          </div>
        </div>
      </div>
      <p className={warning}>
        * 등록하신 아이디를 통해 이름을 수집하며, 응원 메세지와 함께 웹사이트에 게시됩니다.
      </p>
      <div className={classcat([agreement, isChecked ? checkedBox : ''])}>
        <div className={checkbox} onClick={onCheckClick}>
          { isChecked ? <img src={checked} alt="체크박스"/> : null }
        </div>
        <p onClick={onCheckClick}>개인정보 수집 및 이용에 동의합니다.</p>
      </div>
      <button
        className={preRegisterButton}
        style={{ opacity: isChecked ? 1 : .3 }}
        onClick={() => isChecked && signIn()}
      >
        사전 등록하기
      </button>
    </div>
  );
}

export default Agreements;
