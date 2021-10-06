import React, { useRef } from 'react';
import { container, header, closeBtn, list, button } from './MobileMenu.module.scss';
import Modal from "~/components/Modal/Modal";
import Logo from "~/components/Logo/Logo";
import { useMobileMenu, useReservationModal } from "~/data/states/modal.state";

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const linkRef = useRef<HTMLAnchorElement>();
  const [active, setActive] = useMobileMenu();
  const [, setReservationActive] = useReservationModal();
  const onMenuClick = (evt, target: string) => {
    evt.preventDefault();
    setActive(false);
    linkRef.current.href = `#${target}`;
    linkRef.current?.click();
  };
  const onButtonClick = () => {
    setActive(false);
    setReservationActive(true);
  }
  return (
    <Modal active={active} needWrap={false} onClose={() => setActive(false)}>
      <div className={container} onClick={(evt) => evt.stopPropagation()}>
        <div className={header}>
          <Logo/>
          <div className={closeBtn} onClick={() => setActive(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <ul className={list}>
          <li onClick={evt => onMenuClick(evt, 'intro')}><a href="#">소개</a></li>
          <li onClick={evt => onMenuClick(evt, 'event')}><a href="#">이벤트</a></li>
          <li onClick={evt => onMenuClick(evt, 'speakers')}><a href="#">스피커</a></li>
          <li onClick={evt => onMenuClick(evt, 'sessions')}><a href="#">세션 소개</a></li>
          <li onClick={evt => onMenuClick(evt, 'sponsors')}><a href="#">스폰서</a></li>
          <li onClick={evt => onMenuClick(evt, 'coc')}><a href="#">CoC</a></li>
        </ul>
        <button className={button} onClick={onButtonClick}>사전등록</button>
        <a ref={linkRef} href=""/>
      </div>
    </Modal>
  );
}

export default MobileMenu;
