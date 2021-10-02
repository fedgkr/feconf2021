import React from 'react';
import { container, menuList, menu } from './Header.module.scss';
import Logo from "~/components/Logo/Logo";
import { useMobileMenu, useReservationModal } from "~/data/states/modal.state";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [, setModal] = useReservationModal();
  const [, setMobileMenu] = useMobileMenu();
  return (
    <div className={container}>
      <Logo/>
      <ul className={menuList}>
        <li><a href="#intro">소개</a></li>
        <li><a href="#event">이벤트</a></li>
        <li><a href="#speakers">스피커</a></li>
        <li><a href="#sessions">세션 소개</a></li>
        <li><a href="#sponsors">스폰서</a></li>
        <li><a href="#coc">CoC</a></li>
        <li><a href="#"><button onClick={() => setModal(true)}>사전등록</button></a></li>
      </ul>
      <div className={menu} onClick={() => setMobileMenu(true)}>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}

export default Header;
