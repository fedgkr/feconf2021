import React from 'react';
import { container, menuList } from './Header.module.scss';
import ConstraintLayout from "~/components/ConstraintLayout/ConstraintLayout";
import Logo from "~/components/Logo/Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <ConstraintLayout>
      <div className={container}>
        <Logo/>
        <ul className={menuList}>
          <li><a href="#">소개</a></li>
          <li><a href="#">스피커</a></li>
          <li><a href="#">이벤트</a></li>
          <li><a href="#">스폰서</a></li>
          <li><a href="#">사전신청</a></li>
        </ul>
      </div>
    </ConstraintLayout>
  );
}

export default Header;
