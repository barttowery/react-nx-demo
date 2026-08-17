import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { Button } from '../button/button';
import { Label } from '../label/label';
import { Input } from '../input/input';
import { expect, userEvent, waitFor, within } from 'storybook/test';

/** Sheet - Extends the Dialog component to display content that complements the main content of the screen. */
const meta = {
  component: Sheet,
  title: 'Components/Sheet',
} satisfies Meta<typeof Sheet>;
export default meta;

type Story = StoryObj<typeof Sheet>;

/** Primary - Display a Sheet from the right side with controls and buttons. */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </>
    )
  },
} satisfies Story;

/** Side - Use the `side` prop on `SheetContent` to set the edge of the screen where the sheet appears. Values are `top`, `right`, `bottom`, or `left`. */
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
export const Side = {
  tags: ['!test'],
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            </SheetTrigger>
            <SheetContent
              side={side}
              className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
            >
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="no-scrollbar overflow-y-auto px-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <p key={index} className="mb-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                ))}
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    );
  },
} satisfies Story;

/** No Close Button - Use `showCloseButton={false}` on `SheetContent` to hide the close button. */
export const NoClose = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>No Close Button</SheetTitle>
            <SheetDescription>
              This sheet doesn&apos;t have a close button in the top-right corner.
              Click outside to close.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </>
    )
  },
} satisfies Story;

/** Primary Visual - Verifies the sheet component renders correctly with varied content */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Form</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here.
              </SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="visual-form-name">Name</Label>
                <Input id="visual-form-name" defaultValue="Jane Doe" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="visual-form-email">Email</Label>
                <Input id="visual-form-email" defaultValue="jane@example.com" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Long</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Long Content</SheetTitle>
              <SheetDescription>
                This sheet contains scrollable content.
              </SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium mb-2">Section {index + 1}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
            <SheetFooter>
              <Button variant="outline">Close</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Open Form' }));
    await waitFor(() => {
      expect(canvas.getByText("Open Form")).toBeInTheDocument();
    });
  },
} satisfies Story;
