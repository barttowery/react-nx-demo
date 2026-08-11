import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from './select';
import { Field, FieldError, FieldLabel } from '../field/field';
import { expect, within } from 'storybook/test';

/** Select - A component that allows users to select an option from a dropdown list. */
const meta = {
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof Select>;

/** Default story - Displays an example select component */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SelectTrigger aria-label="Select a Fruit" className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
  },
} satisfies Story;

/** With Groups - Displays a select component with grouped options */
export const WithGroups = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SelectTrigger aria-label="Select a Fruit" className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
  },
} satisfies Story;

/** Scrollable - Displays a select component with many options that scrolls */
export const Scrollable = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SelectTrigger aria-label="Select a Timezone" className="w-full max-w-64">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time</SelectItem>
            <SelectItem value="cst">Central Standard Time</SelectItem>
            <SelectItem value="mst">Mountain Standard Time</SelectItem>
            <SelectItem value="pst">Pacific Standard Time</SelectItem>
            <SelectItem value="akst">Alaska Standard Time</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
            <SelectItem value="cet">Central European Time</SelectItem>
            <SelectItem value="eet">Eastern European Time</SelectItem>
            <SelectItem value="west">Western European Summer Time</SelectItem>
            <SelectItem value="cat">Central Africa Time</SelectItem>
            <SelectItem value="eat">East Africa Time</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow Time</SelectItem>
            <SelectItem value="ist">India Standard Time</SelectItem>
            <SelectItem value="cst_china">China Standard Time</SelectItem>
            <SelectItem value="jst">Japan Standard Time</SelectItem>
            <SelectItem value="kst">Korea Standard Time</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">Australian Western Standard Time</SelectItem>
            <SelectItem value="acst">Australian Central Standard Time</SelectItem>
            <SelectItem value="aest">Australian Eastern Standard Time</SelectItem>
            <SelectItem value="nzst">New Zealand Standard Time</SelectItem>
            <SelectItem value="fjt">Fiji Time</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Argentina Time</SelectItem>
            <SelectItem value="bot">Bolivia Time</SelectItem>
            <SelectItem value="brt">Brasilia Time</SelectItem>
            <SelectItem value="clt">Chile Standard Time</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
  },
} satisfies Story;

/** Disabled - Displays a disabled select component */
export const Disabled = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SelectTrigger aria-label="Select a Fruit" className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes" disabled>
              Grapes
            </SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
    disabled: true,
  },
} satisfies Story;

/** Invalid - Displays a invalid select component by adding the `data-invalid` attribute to the Field component and the `aria-invalid` attribute to the `SelectTrigger` component to show an error state.*/
export const Invalid = {
  tags: ['!test'],
  render: (args) => {
    return (
      <Field data-invalid className="w-full max-w-48">
        <FieldLabel htmlFor="fruit">Fruit</FieldLabel>
        <Select>
          <SelectTrigger aria-label="Select a Fruit" aria-invalid>
            <SelectValue id="fruit" placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FieldError>Please select a fruit.</FieldError>
      </Field>
    );
  },
} satisfies Story;


/** Select Primary Visual - Verifies the select component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <>
        <SelectTrigger aria-label="Select a Fruit" className="w-full max-w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
    await expect(canvas.getByText(/Select a fruit/i)).toBeInTheDocument();
  },
} satisfies Story;
