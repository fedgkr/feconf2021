import React from 'react';
import { container, contents } from './Footer.module.scss';
import Logo from "~/components/Logo/Logo";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={container}>
      <div className={contents}>
        <Logo color="#000000"/>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://2020.feconf.kr">FEConf 2020&nbsp;|&nbsp;</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/webfrontend">프론트엔드개발그룹&nbsp;|&nbsp;</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:feconf@googlegroups.com">feconf@googlegroups.com</a></li>
        </ul>
        <span>©FEConf. 2021 All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
