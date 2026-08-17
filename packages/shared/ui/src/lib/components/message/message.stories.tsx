import type { Meta, StoryObj } from '@storybook/react-vite';
import { Message, MessageContent, MessageFooter, MessageHeader } from './message';
import { Bubble, BubbleContent } from '../bubble/bubble';
import { Button } from '../button/button';
import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"
import { expect, within } from 'storybook/test';

/** Message - Displays a message in a conversation, with optional avatar, header, footer, and alignment. */
const meta = {
  component: Message,
  title: 'Components/Message',
} satisfies Meta<typeof Message>;
export default meta;

type Story = StoryObj<typeof Message>;

/** Basic Message - Includes Message Bubble with a Header and Footer information. */
export const Primary = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Message>
          <MessageContent>
            <MessageHeader>Olivia</MessageHeader>
            <Bubble variant="muted">
              <BubbleContent>I already checked the logs.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>
                Send the report to the team. Ping @shadcn if you need help.
              </BubbleContent>
            </Bubble>
            <MessageFooter>
              <div>
                Read <span className="font-normal">Yesterday</span>
              </div>
            </MessageFooter>
          </MessageContent>
        </Message>
      </div>
    );
  },
} satisfies Story;

/** Actions - Place message-level actions in `MessageFooter`, such as copy, retry, or feedback buttons. */
export const Actions = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>
                The install failure is coming from the workspace package.
              </BubbleContent>
            </Bubble>
            <MessageFooter>
              <Button variant="ghost" size="icon" aria-label="Copy" title="Copy">
                <CopyIcon />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Like" title="Like">
                <ThumbsUpIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Dislike"
                title="Dislike"
              >
                <ThumbsDownIcon />
              </Button>
            </MessageFooter>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>Okay drop me a link. Taking a look...</BubbleContent>
            </Bubble>
            <MessageFooter className="gap-2">
              <span className="font-normal text-destructive">Failed to send</span>
              <Button
                variant="ghost"
                size="icon-xs"
                title="Retry"
                aria-label="Retry"
              >
                <RefreshCcwIcon />
              </Button>
            </MessageFooter>
          </MessageContent>
        </Message>
      </div>
    );
  },
} satisfies Story;

/** Message Visual - Verifies the message component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => {
    return (
      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Message>
          <MessageContent>
            <MessageHeader>Olivia</MessageHeader>
            <Bubble variant="muted">
              <BubbleContent>I already checked the logs.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>
                Send the report to the team. Ping @shadcn if you need help.
              </BubbleContent>
            </Bubble>
            <MessageFooter>
              <div>
                Read <span className="font-normal">Yesterday</span>
              </div>
            </MessageFooter>
          </MessageContent>
        </Message>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Olivia')).toBeInTheDocument();
    await expect(canvas.getByText('I already checked the logs.')).toBeInTheDocument();
    await expect(canvas.getByText('Yesterday')).toBeInTheDocument();
  },
} satisfies Story;
