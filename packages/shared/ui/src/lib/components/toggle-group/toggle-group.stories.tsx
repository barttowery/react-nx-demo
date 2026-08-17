import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { Bold, Italic, Underline } from "lucide-react"

/** Toggle Group - A set of two-state buttons that can be toggled on or off. */
const meta = {
  component: ToggleGroup,
  title: 'Components/Toggle Group',
} satisfies Meta<typeof ToggleGroup>;
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

/** Default Example - Multiple toggle buttons using the `outline` variant. */
export const Primary = {
  tags: ['!test'],
  args: {
     variant: "outline",
     type: "multiple",
     children: (
      <>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <Underline />
        </ToggleGroupItem>
      </>
     )
  },
} satisfies Story;

/** Size - Use the size prop to change the size of the toggle group.*/
export const Size: Story = {
  tags: ['!test'],
  args: {},
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm" defaultValue="top" variant="outline">
        <ToggleGroupItem value="top" aria-label="Toggle top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="Toggle left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Toggle right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="top" variant="outline">
        <ToggleGroupItem value="top" aria-label="Toggle top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="Toggle left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Toggle right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

/** Disabled Example - Multiple toggle buttons that are disabled. */
export const Disabled = {
  tags: ['!test'],
  args: {
     disabled: true,
     type: "multiple",
     children: (
      <>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <Underline />
        </ToggleGroupItem>
      </>
     )
  },
} satisfies Story;
