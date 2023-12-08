import { type ComponentPropsWithoutRef } from 'react';
import { type Meta } from '@storybook/react';
import { MeNavigationPresentation } from './MeNavigation';

type Props = ComponentPropsWithoutRef<typeof MeNavigationPresentation>;

const meta = {
  title: 'Feature/MeNavigation',
  component: MeNavigationPresentation,
} satisfies Meta<Props>;

export default meta;

export const Default = {
  args: {
    images: [
      {
        url: 'https://i.pravatar.cc/100',
      },
    ],
  },
};
