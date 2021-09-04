import React from 'react';
import { container, contents } from './Footer.module.scss';
import Logo from "~/components/Logo/Logo";
import { FACEBOOK_FRONTEND_URL, FECONF_EMAIL } from "~/data/const/links";
import SafeLink from "~/components/SafeLink/SafeLink";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={container}>
      <div className={contents}>
        <Logo color="#000000"/>
        <ul>
          <li><SafeLink href="https://2020.feconf.kr">FEConf 2020</SafeLink><span>|</span></li>
          <li><SafeLink href={FACEBOOK_FRONTEND_URL}>프론트엔드개발그룹</SafeLink><span>|</span></li>
          <li><SafeLink href={`mailto:${FECONF_EMAIL}`}>{FECONF_EMAIL}</SafeLink></li>
        </ul>
        <span>©FEConf. 2021 All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
