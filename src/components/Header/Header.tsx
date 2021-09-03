import React from 'react';
import { container, menuList } from './Header.module.scss';
import Logo from "~/components/Logo/Logo";
import { useReservationModal } from "~/data/states/modal.state";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [, setModal] = useReservationModal();
  return (
    <div className={container}>
      <Logo/>
      <ul className={menuList}>
        <li><a href="#">소개</a></li>
        <li><a href="#">이벤트</a></li>
        <li><a href="#">스폰서 모집</a></li>
        <li><a href="#"><button onClick={() => setModal(true)}>사전등록</button></a></li>
      </ul>
    </div>
  );
}

export default Header;
