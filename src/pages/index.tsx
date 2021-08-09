import * as React from "react"
import "~/styles/main.scss";
import { StaticImage } from "gatsby-plugin-image";
import ConstraintLayout from "~/components/ConstraintLayout/ConstraintLayout";
import Header from "~/components/Header/Header";
import HeroSection from "~/components/HeroSection/HeroSection";
import IntroSection from "~/components/IntroSection/IntroSection";
import LookForSponsorSection from "~/components/LookForSponsorSection/LookForSponsorSection";
import Footer from "~/components/Footer/Footer";

const IndexPage = () => {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <IntroSection/>
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
