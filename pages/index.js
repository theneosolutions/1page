import CallToAction from "../components/callToAction/CallToAction";
import Planning from "../components/common/Planning";
import GetInTouch from "../components/contact/GetInTouch";
import Faq from "../components/faq/Faq";
import AppInfo from "../components/home/AppInfo";
import BankioCard from "../components/home/BankioCard";
import BusinessSolutions from "../components/home/BusinessSolutions";
import Features from "../components/home/Features";
import HomeBanner from "../components/home/HomeBanner";
import LatestArticles from "../components/home/LatestArticles";
import Partners from "../components/home/Partners";
import Personalized from "../components/home/Personalized";
import Testimonials from "../components/home/Testimonials";
import MainLoan from "../components/personalLoan/MainLoan";


export default function Home() {
  return (
    <>
    <HomeBanner/>
   
      <Features />
      <GetInTouch/>
      {/* <BusinessSolutions /> */}
      {/* <AppInfo /> */}
      {/* <BankioCard /> */}
      {/* <Planning /> */}
      {/* <Personalized /> */}
      {/* <Testimonials /> */}
      {/* <LatestArticles /> */}
      {/* <Faq />
      <CallToAction/> */}
    </>
  );
}
