import { type Meta, type StoryObj } from '@storybook/react';
import { MeLibraryListPresentation } from './MeLibraryList';

type Props = typeof MeLibraryListPresentation;

const meta = {
  title: 'feature/MeLibraryList',
  component: MeLibraryListPresentation,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    items: [
      {
        id: '1',
        name: 'Item 1',
        type: 'album',
        images: [{ url: 'https://i.pravatar.cc/100', width: null, height: null }],
      },
      {
        id: '2',
        name: 'Item 2',
        type: 'playlist',
        owner: { display_name: 'Owner 2' },
        images: [{ url: 'https://i.pravatar.cc/100', width: null, height: null }],
      },
    ],
  },
};
