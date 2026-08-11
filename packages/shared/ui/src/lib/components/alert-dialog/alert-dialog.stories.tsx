import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogMedia,
} from './alert-dialog';
import { Button } from '../button/button';
import { CircleFadingPlusIcon, BluetoothIcon, Trash2Icon } from "lucide-react";

/** Alert Dialog - A modal dialog that interrupts the user with important content and expects a response. */
const meta = {
  component: AlertDialog,
  title: 'Components/Alert Dialog',
} satisfies Meta<typeof AlertDialog>;
export default meta;

type Story = StoryObj<typeof AlertDialog>;

/** Basic Alert Dialog - A basic alert dialog with a title, description, and cancel and continue buttons. */
export const Primary = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    )
  },
} satisfies Story;

/** Small Alert Dialog - Uses the small size variant to make the dialog smaller. */
export const Small = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to allow the USB accessory to connect to this device?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
            <AlertDialogAction>Allow</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    )
  },
} satisfies Story;

/** Media Alert Dialog - Use the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog. */
export const Media = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Share Project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <CircleFadingPlusIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Share this project?</AlertDialogTitle>
            <AlertDialogDescription>
              Anyone with the link will be able to view and edit this project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Share</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    )
  },
} satisfies Story;

/** Small with Media Alert Dialog - Use the size="sm" prop to make the alert dialog smaller and the AlertDialogMedia component to add a media element such as an icon or image to the alert dialog. */
export const SmallWithMedia = {
  tags: ['!test'],
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia>
              <BluetoothIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to allow the USB accessory to connect to this device?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
            <AlertDialogAction>Allow</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    )
  },
} satisfies Story;

/** Destructive Alert Dialog - Use the `AlertDialogAction` component to add a destructive action button to the alert dialog. */
export const Destructive = {
  tags: ['!test'],
  args: {
    children: (
      <>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Chat</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      </>
    )
  },
} satisfies Story;
