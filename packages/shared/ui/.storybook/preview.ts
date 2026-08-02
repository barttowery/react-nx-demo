import './tailwind-imports.css';
import 'unfonts.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
export const tags = ['autodocs'];

export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Components'],
    },
  },
};

export const decorators: Preview['decorators'] = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
