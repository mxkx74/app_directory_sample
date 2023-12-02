import { type ComponentPropsWithoutRef } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

type Props = ComponentPropsWithoutRef<typeof Avatar>;

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <Avatar size={args.size}>
      <AvatarImage alt="Avatar" src="https://i.pravatar.cc/100" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
export const NoImage: StoryObj<Props> = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <Avatar size={args.size}>
      <AvatarImage alt="Avatar" src="" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
