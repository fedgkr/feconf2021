import * as React from "react"
import "~/styles/main.scss";
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
import Meta from "~/components/Meta/Meta";
import AdvanceReservationModal from "~/components/Modal/components/AdvanceReservationModal/AdvanceReservationModal";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Meta/>
      <main>
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
      <div id="modal-root"/>
      <AdvanceReservationModal/>
    </React.Fragment>
  )
}

export default IndexPage
