import AboutUs from "./about-us/about-us";
import Faq from "./faq/faq";
import Feature from "./feature/feature";
import HeroSection from "./hero/hero";
import BrandSlider from "./hero/hero-brand-slider";
import {
  AvatarList,
  BrandList,
  Features,
  AboutUsItem,
  StatisticsCounter,
  PricingPlan,
  FaqQuestion,
  FooterData,
} from '@react-nx-demo/sales-models';
import Pricing from "./pricing/pricing";
import CallToAction from "./call-to-action/call-to-action";
import Footer from "./footer/footer";
import Testimonial from "./testimonial/testimonial";

export interface SalesContentProps {
  avatarList: AvatarList[];
  brandList: BrandList[];
  featureList: Features;
  aboutUsData: AboutUsItem[];
  statisticsCounter: StatisticsCounter[];
  pricingData: PricingPlan[];
  faqData: FaqQuestion[];
  footerData: FooterData[];
}

export function SalesContent({
  avatarList,
  brandList,
  featureList,
  aboutUsData,
  statisticsCounter,
  pricingData,
  faqData,
  footerData,
}: SalesContentProps) {
  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
        <Feature featureData={featureList} />
        <AboutUs aboutusData={aboutUsData} statisticsCounter={statisticsCounter} />
        <Testimonial />
        <Pricing pricingData={pricingData} />
        <Faq faqData={faqData} />
        <CallToAction />
        <Footer footerSections={footerData} />
      </main>
    </div>
  );
}

export default SalesContent;
