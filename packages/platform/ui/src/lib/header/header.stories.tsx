import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';
import { useState } from 'react';
import { Theme } from '@react-nx-demo/platform-models';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: Header,
  title: 'Header',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div style={{ margin: '-16px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof Header>;

const HeaderComponent = ({currentTheme}: {currentTheme: Theme}) => {
  const [theme, setTheme ] = useState<Theme>(currentTheme);

  const toggleColor = () => {
    const root = document.getElementById('storybook-root');
    if(theme.color === 'green') {
      setTheme({ color: 'blue', lightMode: theme.lightMode });
      root?.classList.toggle('blue', true);
    }
    else {
      setTheme({ color: 'green', lightMode: theme.lightMode });
      root?.classList.toggle('blue', false);
    }
  }

  const toggleLightMode = () => {
    const root = document.getElementById('storybook-root');
    if(theme.lightMode === 'light') {
      setTheme({ color: theme.color, lightMode: 'dark' });
      root?.classList.toggle('dark', true);
    }
    else {
      setTheme({ color: theme.color, lightMode: 'light' });
      root?.classList.toggle('dark', false);
    }
  }

  return (
    <Header
      currentTheme={theme}
      onToggleColor={toggleColor}
      onToggleLightModel={toggleLightMode}
    />
  )
}

export const Primary = {
  args: {
    currentTheme: {
      color: 'green',
      lightMode: 'light'
    }
  },
  decorators: [
    (Story) => {

      return (
        <Story />
      )
    }
  ],
  render: (args) => {
    return (
      <HeaderComponent currentTheme={args.currentTheme} />
    );
  },
} satisfies Story;
