import React from 'react';
import { container, menuList } from './Header.module.scss';
import Logo from "../Logo/Logo";
import ConstraintLayout from "~/components/ConstraintLayout/ConstraintLayout";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <ConstraintLayout>
      <div className={container}>
        <Logo/>
        <ul className={menuList}>
          <li><a href="#">About</a></li>
          <li><a href="#">Speaker</a></li>
          <li><a href="#">Sponsor</a></li>
          <li><a href="#">Event</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">사전신청</a></li>
        </ul>
      </div>
    </ConstraintLayout>
  );
}

export default Header;
