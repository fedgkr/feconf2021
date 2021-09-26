import * as React from "react"
import "~/styles/main.scss";
import Header from "~/components/Header/Header";
import HeroSection from "~/components/HeroSection/HeroSection";
import IntroSection from "~/components/IntroSection/IntroSection";
import SponsorSection from "~/components/SponsorSection/SponsorSection";
import Footer from "~/components/Footer/Footer";
import HistorySection from "~/components/HistorySection/HistorySection";
import ChannelInfoSection from "~/components/ChannelInfoSection/ChannelInfoSection";
import FEConfFightingSection from "~/components/FEConfFightingSection/FEConfFightingSection";
import LinkShareSection from "~/components/LinkShareSection/LinkShareSection";
import CoCSection from "~/components/CoCSection/CoCSection";
import Meta from "~/components/Meta/Meta";
import AdvanceReservationModal from "~/components/Modal/components/AdvanceReservationModal/AdvanceReservationModal";
import { useAfterLoginModal } from "~/hooks/useSupportModal";
import { useFirebase } from "~/hooks/useFirestore";
import MobileMenu from "~/components/Modal/components/MobileMenu/MobileMenu";
import SpeakerSection from "~/components/SpeakerSection/SpeakerSection";
import SessionSection from "~/components/SessionSection/SessionSection";

const IndexPage = () => {
  useAfterLoginModal();
  useFirebase();
  return (
    <React.Fragment>
      <Meta/>
      <main>
        <Header/>
        <HeroSection/>
        <IntroSection/>
        <HistorySection/>
        <ChannelInfoSection/>
        <SpeakerSection/>
        <SessionSection/>
        <SponsorSection/>
        <FEConfFightingSection/>
        <LinkShareSection/>
        <CoCSection/>
        <Footer/>
      </main>
      <AdvanceReservationModal/>
      <MobileMenu/>
    </React.Fragment>
  )
}

export default IndexPage
