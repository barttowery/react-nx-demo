import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
];

/** Accordion - A stacked set of headings that each reveal a section of content when selected. */
const meta = {
  component: Accordion,
  title: 'Components/Accordion',
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof Accordion>;

/** Basic - A basic accordion that shows one item at a time. The first item is open by default. */
export const Primary = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1',
    className: 'max-w-lg',
    children: (
      <>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </>
    )
  },
} satisfies Story;

/** Multiple - Use `type="multiple"` to allow multiple items to be open at the same time. */
export const Multiple = {
  args: {
    type: 'multiple',
    defaultValue: ['item-1'],
    className: 'max-w-lg',
    children: (
      <>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </>
    )
  },
} satisfies Story;

/** Disabled - Use the `disabled` prop on `AccordionItem` to disable individual items. */
export const Disabled = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'max-full',
    children: (
      <>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I access my account history?</AccordionTrigger>
        <AccordionContent>
          Yes, you can view your complete account history including all
          transactions, plan changes, and support tickets in the Account History
          section of your dashboard.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Premium feature information</AccordionTrigger>
        <AccordionContent>
          This section contains information about premium features. Upgrade your
          plan to access this content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I update my email address?</AccordionTrigger>
        <AccordionContent>
          You can update your email address in your account settings.
          You&apos;ll receive a verification email at your new address to
          confirm the change.
        </AccordionContent>
      </AccordionItem>
      </>
    )
  },
} satisfies Story;

/** Borders - Add `border` to the `Accordion` and `border-b last:border-b-0` to the `AccordionItem` to add borders to the items. */
export const Borders = {
  args: {
    type: 'single',
    defaultValue: 'item-1',
    className: 'max-w-lg rounded-lg border',
    children: (
      <>
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-b px-4 last:border-b-0"
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </>
    )
  },
} satisfies Story;
