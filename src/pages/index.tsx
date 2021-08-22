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
      <LookForSponsorSection/>
      <ConstraintLayout>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </ConstraintLayout>
      <Footer/>
    </main>
  )
}

export default IndexPage
