import { type Meta, type StoryObj } from '@storybook/react';
import { Label } from './Label';

type Props = typeof Label;

const meta = {
  title: 'ui/Label',
  component: Label,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    children: 'Label',
  },
};
