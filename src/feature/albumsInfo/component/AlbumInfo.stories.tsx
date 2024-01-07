import { type ComponentPropsWithoutRef } from 'react';
import { type Meta } from '@storybook/react';
import { AlbumInfoPresentation } from './AlbumInfo';

type Props = ComponentPropsWithoutRef<typeof AlbumInfoPresentation>;

const meta = {
  title: 'Feature/AlbumInfo',
  component: AlbumInfoPresentation,
} satisfies Meta<Props>;

export default meta;

export const Default = {
  args: {},
};
