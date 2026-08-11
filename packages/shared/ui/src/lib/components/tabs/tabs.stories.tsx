import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card/card';
import { expect, userEvent, within } from 'storybook/test';

/** Tabs - Displays a tab component with multiple tabs and content. */
const meta = {
  component: Tabs,
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof Tabs>;

/** Default tabs - Displays a tab component with multiple tabs and content */
export const Primary = {
  tags: ['!test'],
  args: {
    defaultValue: "overview",
    className: "w-100",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track progress
                across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends and
                identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </>
    ),
  },
} satisfies Story;

/** Line Tabs - Displays a tab component with a line indicator */
export const Line = {
  tags: ['!test'],
  args: {
    defaultValue: "overview",
    className: "w-100",
    children: (
      <>
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track progress
                across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends and
                identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </>
    ),
  },
} satisfies Story;

/** Vertical Tabs - To display vertical tabs use `orientation="vertical"`. */
export const Vertical = {
  tags: ['!test'],
  args: {
    defaultValue: "account",
    orientation: "vertical",
    children: (
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
    ),
  },
} satisfies Story;

/** Disabled Tab - An example with a disabled tab. */
export const Disabled = {
  tags: ['!test'],
  args: {
    defaultValue: "home",
    children: (
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
    ),
  },
} satisfies Story;

/** Tabs Default Visual - Verifies the default tabs render correctly */
export const PrimaryVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: "overview",
    className: "w-100",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects.
            </CardContent>
          </Card>
        </TabsContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const overviewTrigger = canvas.getByRole('tab', { name: /Overview/i });
    await expect(overviewTrigger).toBeInTheDocument();
    await expect(overviewTrigger).toHaveAttribute('data-state', 'active');
    await expect(canvas.queryByText(/You have 12 active projects/i)).toBeInTheDocument();
  },
} satisfies Story;

/** Tabs Line Visual - Verifies line variant tabs render correctly */
export const LineVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: "overview",
    className: "w-100",
    children: (
      <>
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects.
            </CardContent>
          </Card>
        </TabsContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const overviewTrigger = canvas.getByRole('tab', { name: /Overview/i });
    await expect(overviewTrigger).toBeInTheDocument();
    await expect(overviewTrigger).toHaveAttribute('data-state', 'active');
  },
} satisfies Story;

/** Tabs Vertical Visual - Verifies vertical tabs render correctly */
export const VerticalVisual: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: "account",
    orientation: "vertical",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Manage your account settings.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">Password content panel</TabsContent>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find and click the password tab trigger
    const passwordTab = canvas.getByRole('tab', { name: /password/i });
    await userEvent.click(passwordTab);

    // Assert that the password content is visible
    await expect(canvas.getByText('Password content panel')).toBeVisible();

  },
} satisfies Story;
