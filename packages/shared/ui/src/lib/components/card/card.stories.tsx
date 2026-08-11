import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from './card';
import { Button } from '../button/button';
import { Badge } from '../badge/badge';

/** Card - Displays a card with header, content, and footer. */
const meta = {
  component: Card,
  title: 'Components/Card',
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof Card>;

/** Default card - Displays a card with just content */
export const Primary = {
  tags: ['!test'],
  args: {
    className: "mx-auto w-full max-w-sm",
    children: (
        <CardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum nec sem ac varius. Ut ac massa pulvinar, rutrum nisl quis, efficitur dolor. Nam rhoncus, sapien at malesuada imperdiet, sapien justo condimentum diam, ut vestibulum magna turpis sed libero. Cras arcu ex, blandit a accumsan eu, euismod et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, justo sagittis porttitor tincidunt, libero quam bibendum urna, vel venenatis nisl mi eget nulla. Nulla condimentum, metus non finibus ultricies, diam leo interdum mauris, vitae aliquam orci lacus in massa. Etiam efficitur turpis sit amet metus vestibulum, vel interdum risus eleifend. Ut id pulvinar turpis. Sed a nibh ac dolor tempor consectetur eu eu nulla. Nulla a lectus eget nibh ullamcorper suscipit sed ut velit. Proin laoreet orci sed orci tincidunt, quis sodales tortor sollicitudin. Nullam malesuada non nisi et ultricies. Aenean rutrum efficitur nulla maximus feugiat.</p>
        </CardContent>
    ),
  },
} satisfies Story;

/** With Header and Footer */
export const WithHeaderAndFooter = {
  tags: ['!test'],
  args: {
    className: "mx-auto w-full max-w-sm",
    children: (
      <>
        <CardHeader>
          <CardTitle>Header Footer Card</CardTitle>
          <CardDescription>
            This card uses a header and a footer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop and here is the default size.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Action
          </Button>
        </CardFooter>
      </>
    ),
  },
} satisfies Story;

/** Small Size - uses the small size variant */
export const SmallSize = {
  tags: ['!test'],
  args: {
    size: "sm",
    className: "mx-auto w-full max-w-sm",
    children: (
      <>
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            This card uses the small size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop that can be set to
            &quot;sm&quot; for a more compact appearance.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Action
          </Button>
        </CardFooter>
      </>
    ),
  },
} satisfies Story;

/** Scrollable Content - A card with scrollable content and fixed header and footer */
export const ScrollableContent = {
  tags: ['!test'],
  args: {
    className: "mx-auto w-full max-w-sm",
    children: (
      <>
        <CardHeader>
          <CardTitle>Scrollable Content</CardTitle>
          <CardDescription>
            Review the terms before accepting the agreement.
          </CardDescription>
        </CardHeader>
        <CardContent className="-mb-(--card-spacing)">
          <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t border-border bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum nec sem ac varius. Ut ac massa pulvinar, rutrum nisl quis, efficitur dolor. Nam rhoncus, sapien at malesuada imperdiet, sapien justo condimentum diam, ut vestibulum magna turpis sed libero. Cras arcu ex, blandit a accumsan eu, euismod et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, justo sagittis porttitor tincidunt, libero quam bibendum urna, vel venenatis nisl mi eget nulla. Nulla condimentum, metus non finibus ultricies, diam leo interdum mauris, vitae aliquam orci lacus in massa. Etiam efficitur turpis sit amet metus vestibulum, vel interdum risus eleifend. Ut id pulvinar turpis. Sed a nibh ac dolor tempor consectetur eu eu nulla. Nulla a lectus eget nibh ullamcorper suscipit sed ut velit. Proin laoreet orci sed orci tincidunt, quis sodales tortor sollicitudin. Nullam malesuada non nisi et ultricies. Aenean rutrum efficitur nulla maximus feugiat.
            </p>
            <p>
              Phasellus nisl arcu, euismod a ipsum sed, consectetur lobortis mi. Curabitur at tristique mauris. Nunc mattis lectus ut ligula vulputate porttitor. Praesent euismod arcu ut lorem pretium ultrices. Integer mollis porta augue, vitae ultricies ipsum fermentum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus eros, consequat a blandit ut, luctus non tellus. Cras placerat ornare est, quis ultricies lorem volutpat non. Donec aliquam pharetra vulputate. Suspendisse in massa interdum, convallis lectus sed, eleifend libero. Etiam pharetra felis eu ipsum laoreet luctus. Suspendisse ullamcorper lacus et velit consequat commodo. Nunc ac dictum augue.
            </p>
            <p>
              Ut suscipit, metus sed iaculis commodo, erat velit varius mauris, a semper arcu tortor sed dolor. Praesent ut metus elit. Sed aliquam porta tempor. Aenean molestie, nisi a ullamcorper aliquet, odio tortor facilisis nisl, sit amet suscipit ligula tortor non purus. In ac elit a ligula tincidunt suscipit sodales eu quam. Donec et urna nec lectus efficitur fermentum at vel orci. Etiam non nibh et urna vulputate porta id at sapien. Mauris maximus felis id magna dapibus tincidunt. Etiam porttitor a diam in commodo. Vestibulum felis turpis, iaculis at ornare vel, lobortis sit amet diam. Etiam sed ante ex. Vivamus dignissim pellentesque purus et consequat.
            </p>
            <p>
              Donec urna tortor, pellentesque et ex quis, auctor tincidunt odio. Maecenas vel quam auctor augue faucibus facilisis. Fusce pulvinar lacus vitae purus mollis ultricies. Cras vel nulla nibh. Maecenas nec mi et purus rutrum porta quis non orci. Praesent laoreet feugiat urna, id mattis augue iaculis non. Aenean maximus iaculis velit, in convallis leo iaculis vitae. Aliquam malesuada consequat lectus, a varius nunc. Nulla tempus justo non ante lacinia mollis. Donec ultricies gravida felis eget sodales.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </CardFooter>
      </>
    ),
  },
} satisfies Story;

/** Image - A card with an image before the card header */
export const Image = {
  tags: ['!test'],
  args: {
    className: "relative mx-auto w-full max-w-sm pt-0",
    children: (
      <>
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Design systems meetup</CardTitle>
          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </>
    ),
  },
} satisfies Story;
