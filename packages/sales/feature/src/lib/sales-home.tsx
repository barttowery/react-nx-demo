import {
  aboutusData,
  avatarList,
  brandList,
  faqData,
  featureData,
  footerData,
  pricingData,
  statisticsCounter,
} from './sales-home-data';
import { SalesContent } from '@react-nx-demo/sales-ui';

export function SalesHome() {
  return (
    <SalesContent
      aboutUsData={aboutusData}
      avatarList={avatarList}
      brandList={brandList}
      faqData={faqData}
      featureList={featureData}
      footerData={footerData}
      pricingData={pricingData}
      statisticsCounter={statisticsCounter}
    />
  );
}

export default SalesHome;
