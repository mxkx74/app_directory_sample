import type { Preview } from '@storybook/react';
import '../src/style/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#1E1E1E',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
  },
};
