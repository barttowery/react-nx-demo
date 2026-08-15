import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from './bubble';

/** Bubble - Displays conversational content in a message bubble. Supports variants, alignment, grouping, reactions, and collapsible content. */
const meta = {
  component: Bubble,
  title: 'Components/Bubble',
} satisfies Meta<typeof Bubble>;
export default meta;

type Story = StoryObj<typeof Bubble>;

/** Basic Example - Includes Bubble with Content and Reactions */
export const Primary = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Bubble align="end">
          <BubbleContent>Hey there! what&apos;s up?</BubbleContent>
        </Bubble>
        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>Hey! Want to see chat bubbles?</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              I can group messages, switch sides, and keep the whole thread easy
              to scan.
            </BubbleContent>
            <BubbleReactions role="img" aria-label="Reaction: thumbs up">
              <span role="img" aria-label='Reaction: thumbs up'>👍</span>
            </BubbleReactions>
          </Bubble>
        </BubbleGroup>
        <Bubble align="end">
          <BubbleContent>Sure. Hit me with your best demo.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            Yes. You are reading a demo that is demoing itself. Very meta. Very
            on-brand.
          </BubbleContent>
          <BubbleReactions
            role="img"
            aria-label="Reactions: thumbs up, fire, eyes, and 2 more"
          >
            <span role="img" aria-label='Reaction: thumbs up'>👍</span>
            <span role="img" aria-label='Reaction: fire'>🔥</span>
            <span role="img" aria-label='Reaction: eyes'>👀</span>
            <span role="img" aria-label='Reaction: 2 more'>+2</span>
          </BubbleReactions>
        </Bubble>
      </div>
    );
  },
} satisfies Story;

/** Variants - Use `variant` to change the visual treatment of the bubble. */
export const Variants = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-12 py-12">
        <Bubble>
          <BubbleContent>This is the default primary bubble.</BubbleContent>
        </Bubble>
        <Bubble variant="secondary" align="end">
          <BubbleContent>This is the secondary variant.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            This one is muted. It uses a lower emphasis color for the chat bubble.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: thumbs up">
            <span role="img" aria-label='Reaction: thumbs up'>👍</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent>
            This one is tinted. The tint is a softer color derived from the
            primary color.
          </BubbleContent>
        </Bubble>
        <Bubble variant="outline">
          <BubbleContent>We can also use an outlined variant.</BubbleContent>
        </Bubble>
        <Bubble variant="destructive" align="end">
          <BubbleContent>Or a destructive variant with a reaction.</BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: fire">
            <span role="img" aria-label='Reaction: fire'>🔥</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="ghost">
          <BubbleContent>
            Ghost bubbles work for assistant text and other content that should not be framed. This is perfect for assistant messages that should not have a frame and can take the full width of the container.
          </BubbleContent>
        </Bubble>
      </div>
    );
  },
} satisfies Story;
