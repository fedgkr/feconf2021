import React from 'react';
import { container, menuList } from './Header.module.scss';
import Logo from "~/components/Logo/Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={container}>
      <Logo/>
      <ul className={menuList}>
        <li><a href="#">소개</a></li>
        <li><a href="#">이벤트</a></li>
        <li><a href="#">스폰서 모집</a></li>
        <li><a href="#"><button>사전등록</button></a></li>
      </ul>
    </div>
  );
}

export default Header;
