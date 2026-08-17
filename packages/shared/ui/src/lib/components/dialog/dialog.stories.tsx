import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from '../button/button';
import { Field, FieldGroup } from '../field/field';
import { Label } from '../label/label';
import { Input } from '../input/input';
import { expect, screen, waitFor } from 'storybook/test';

const meta = {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>;
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    ),
  },
} satisfies Story;

/** Sticky Footer - Keep the footer and actions visible while the content scrolls. */
export const StickyFooter = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline">Sticky Footer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sticky Footer</DialogTitle>
            <DialogDescription>
              This dialog has a sticky footer that stays visible while the content
              scrolls.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
} satisfies Story;

/** Dialog Primary Visual - Verifies the dialog component renders correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="Pedro Duarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));

    await waitFor(() =>
      expect(screen.getByRole('dialog')).toBeInTheDocument(),
    );
  },
} satisfies Story;

/** Dialog With Description Visual - Verifies the dialog with description renders correctly */
export const WithDescriptionVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Manage your account settings and preferences. This dialog includes
              a description to provide context for the user.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" defaultValue="user@example.com" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button variant="outline">Close</Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));

    await waitFor(() =>
      expect(screen.getByRole('dialog')).toBeInTheDocument(),
    );
    await expect(screen.getByText(/Manage your account settings/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Dialog Destructive Visual - Verifies the destructive dialog with delete action renders correctly */
export const DestructiveVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    children: (
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Delete Item</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete item</DialogTitle>
            <DialogDescription className="text-destructive">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-end space-x-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </Button>
          </div>
        </DialogContent>
      </form>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Delete Item' }));

    await waitFor(async() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    await expect(screen.getByRole('button', { name: /Delete/i })).toBeEnabled();
    await expect(screen.getByRole('button', { name: /Delete/i })).toHaveClass('bg-destructive', 'text-destructive-foreground');
  },
} satisfies Story;
