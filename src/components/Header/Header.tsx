import React from 'react';
import css from './Header.module.scss';
import Logo from "../Logo/Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={css.Header}>
      <Logo/>
    </div>
  );
}

export default Header;
