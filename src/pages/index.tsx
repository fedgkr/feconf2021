import * as React from "react"
import "~/styles/main.scss";
import { Helmet } from 'react-helmet';
import { StaticImage } from "gatsby-plugin-image";
import ConstraintLayout from "~/components/ConstraintLayout/ConstraintLayout";
import Header from "~/components/Header/Header";
import HeroSection from "~/components/HeroSection/HeroSection";
import IntroSection from "~/components/IntroSection/IntroSection";
import LookForSponsorSection from "~/components/LookForSponsorSection/LookForSponsorSection";
import Footer from "~/components/Footer/Footer";
import HistorySection from "~/components/HistorySection/HistorySection";
import ChannelInfoSection from "~/components/ChannelInfoSection/ChannelInfoSection";
import FEConfFightingSection from "~/components/FEConfFightingSection/FEConfFightingSection";
import LinkShareSection from "~/components/LinkShareSection/LinkShareSection";
import CoCSection from "~/components/CoCSection/CoCSection";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>FEConf 2021</title>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
      </Helmet>
      <Header/>
      <HeroSection/>
      <IntroSection/>
      <HistorySection/>
      <ChannelInfoSection/>
      <LookForSponsorSection/>
      <FEConfFightingSection/>
      <LinkShareSection/>
      <CoCSection/>
      <Footer/>
    </main>
  )
}

export default IndexPage
