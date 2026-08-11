import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxValue,
  useComboboxAnchor,
  ComboboxGroup,
  ComboboxCollection,
  ComboboxLabel,
  ComboboxSeparator,
  ComboboxTrigger,
} from './combobox';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../item/item';
import { Button } from '../button/button';
import { InputGroupAddon } from '../input-group/input-group';
import { GlobeIcon } from 'lucide-react';
import { expect, within } from 'storybook/test';

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;
const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const;
const countries = [
  { code: "", value: "", continent: "", label: "Select country" },
  {
    code: "ar",
    value: "argentina",
    label: "Argentina",
    continent: "South America",
  },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "ca", value: "canada", label: "Canada", continent: "North America" },
  { code: "cn", value: "china", label: "China", continent: "Asia" },
  {
    code: "co",
    value: "colombia",
    label: "Colombia",
    continent: "South America",
  },
  { code: "eg", value: "egypt", label: "Egypt", continent: "Africa" },
  { code: "fr", value: "france", label: "France", continent: "Europe" },
  { code: "de", value: "germany", label: "Germany", continent: "Europe" },
  { code: "it", value: "italy", label: "Italy", continent: "Europe" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "ke", value: "kenya", label: "Kenya", continent: "Africa" },
  { code: "mx", value: "mexico", label: "Mexico", continent: "North America" },
  {
    code: "nz",
    value: "new-zealand",
    label: "New Zealand",
    continent: "Oceania",
  },
  { code: "ng", value: "nigeria", label: "Nigeria", continent: "Africa" },
  {
    code: "za",
    value: "south-africa",
    label: "South Africa",
    continent: "Africa",
  },
  { code: "kr", value: "south-korea", label: "South Korea", continent: "Asia" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "United Kingdom",
    continent: "Europe",
  },
  {
    code: "us",
    value: "united-states",
    label: "United States",
    continent: "North America",
  },
] as const;

/** Combobox - Autocomplete input with a list of suggestions. Note: There are accessibility considerations when using this component. */
const meta = {
  component: Combobox,
  title: 'Components/Combobox',
} satisfies Meta<typeof Combobox>;
export default meta;

type Story = StoryObj<typeof Combobox>;

/* * Primary story - Displays a combobox with a list of choices. */
export const Primary = {
  tags: ['!test'],
  args: {
    items: frameworks,
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    )
  },
} satisfies Story;

/** Allow Multiple Selection - A combobox with multiple selection using `multiple` and `ComboboxChips`. */
const MultipleSelectionTemplate = () => {
  const anchor = useComboboxAnchor();
  
  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <Fragment>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
export const AllowMultipleSelection = {
  tags: ['!test'],
  render: () => <MultipleSelectionTemplate />,
} satisfies Story;

/** Clear Button - Use the `showClear` prop to show a clear button. */
export const ClearButton = {
  tags: ['!test'],
  args: {
    items: frameworks,
    defaultValue: [frameworks[0]],
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" showClear />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Groups - Use the `ComboboxGroup` and `ComboboxSeparator` to group items in the dropdown. */
export const Groups = {
  tags: ['!test'],
  args: {
    items: timezones,
    children: (
      <>
        <ComboboxInput placeholder="Select a timezone" />
        <ComboboxContent>
          <ComboboxEmpty>No timezones found.</ComboboxEmpty>
          <ComboboxList>
            {(group, index) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index < timezones.length - 1 && <ComboboxSeparator />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Custom Items - Render a custom component inside the `ComboboxItem` */
export const CustomItems = {
  tags: ['!test'],
  args: {
    items: countries.filter((country) => country.code !== ""),
    itemToStringValue: (itemValue: unknown) => {
      const country = itemValue as (typeof countries)[number];
      return country.label;
    },
    children: (
      <>
        <ComboboxInput placeholder="Search countries..." />
        <ComboboxContent>
          <ComboboxEmpty>No countries found.</ComboboxEmpty>
          <ComboboxList>
            {(country) => (
              <ComboboxItem key={country.code} value={country}>
                <Item size="xs" className="p-0">
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {country.label}
                    </ItemTitle>
                    <ItemDescription>
                      {country.continent} ({country.code})
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Invalid - Use the `aria-invalid` prop on `ComboboxInput` to make the combobox invalid.*/
export const Invalid = {
  tags: ['!test'],
  args: {
    items: frameworks,
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" aria-invalid="true" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Disabled - Use the `disabled` prop on `ComboboxInput` to disable the combobox. */
export const Disabled = {
  tags: ['!test'],
  args: {
    items: frameworks,
    disabled: true,
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" disabled />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Popup - Trigger the combobox from a button or any other component by using the `render` prop. Move the `ComboboxInput` inside the `ComboboxContent`. */
export const Popup = {
  tags: ['!test'],
  args: {
    items: countries,
    defaultValue: countries[0],
    children: (
      <>
        <ComboboxTrigger render={<Button variant="outline" className="w-64 justify-between font-normal"><ComboboxValue /></Button>} />
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Input Group - Use the `InputGroupAddon` component within an `ComboboxInput` to create a grouped input within the combobox. */
export const InputGroup = {
  tags: ['!test'],
  args: {
    items: timezones,
    children: (
      <>
        <ComboboxInput placeholder="Select a timezone">
          <InputGroupAddon>
            <GlobeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent alignOffset={-28} className="w-60">
          <ComboboxEmpty>No timezones found.</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
} satisfies Story;

/** Combobox Default Visual - Verifies the combobox renders correctly with default styling */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    items: frameworks,
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/Select a framework/i);
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('placeholder', 'Select a framework');
  },
} satisfies Story;

/** Combobox Disabled Visual - Verifies disabled combobox renders correctly */
export const DisabledVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    items: frameworks,
    disabled: true,
    children: (
      <>
        <ComboboxInput placeholder="Select a framework" disabled />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/Select a framework/i);
    await expect(input).toBeInTheDocument();
    await expect(input).toBeDisabled();
  },
} satisfies Story;

/** Combobox With Group Visual - Verifies combobox with grouped items renders correctly */
export const GroupedVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    items: timezones,
    children: (
      <>
        <ComboboxInput placeholder="Select a timezone">
          <InputGroupAddon>
            <GlobeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent alignOffset={-28} className="w-60">
          <ComboboxEmpty>No timezones found.</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/Select a timezone/i);
    await expect(input).toBeInTheDocument();
  },
} satisfies Story;
