import type { Meta, StoryObj } from '@storybook/react-vite';
import { SalesContent } from './sales-content';
import {
  avatarListMock,
  brandListMock,
  featureDataMock,
  aboutusDataMock,
  statisticsCounterMock,
  pricingDataMock,
  faqDataMock,
  footerDataMock,
} from '@react-nx-demo/sales-mocks';

const meta = {
  component: SalesContent,
  title: 'Sales Content',
} satisfies Meta<typeof SalesContent>;
export default meta;

type Story = StoryObj<typeof SalesContent>;

export const Primary = {
  args: {
    avatarList: avatarListMock,
    brandList: brandListMock,
    featureList: featureDataMock,
    aboutUsData: aboutusDataMock,
    statisticsCounter: statisticsCounterMock,
    pricingData: pricingDataMock,
    faqData: faqDataMock,
    footerData: footerDataMock,
  },
} satisfies Story;
