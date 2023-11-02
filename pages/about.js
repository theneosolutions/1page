import Banner from "../components/about/Banner";
import Career from "../components/about/Career";
import CoreValues from "../components/about/CoreValues";
import GlobalBanking from "../components/about/GlobalBanking";
import Hero from "../components/about/Hero";
import OurJourney from "../components/about/OurJourney";
import BusinessSolutions from "../components/home/BusinessSolutions";
import MoreFeature from "../components/remittance/MoreFeature";
import Team from "../components/team/Team";

export default function About() {
  return (
    <>
      <Banner />
      <Hero />
      <BusinessSolutions/>
      <MoreFeature/>
      <GlobalBanking />
      {/* <OurJourney />
      <Team />
      <Career /> */}
    </>
  );
}
